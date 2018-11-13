---
---

import * as app from '/assets/modules/index.mjs';

console.log('The special message is: ' + app.doHello());

const hybrids = window.hybrids;
const customElements = window.customElements;
var dataMOdel = app.getDataModel();
dataMOdel.route = window.location.hash;

//const util = module.util; 
const ignoredElements = [
  'simple-counter'
];

{% include jsGenerator.js %}

$(document).ready(function() {

  Vue.config.ignoredElements = ignoredElements;
  
  var vm = new Vue({
      el: '#belly',
      data: dataMOdel,
      beforeCreate: function() {
        console.log('Just saying hi before I create the vue instance.');
      },
      created: function() {
        console.log('The vue instance has been created.');
        this.changeView(this.route);
      },
      computed: {
        activeView: function() {
          const view = this.routeParts[0];
          console.log('The view to load is ',view);
          var viewData = this.getViewData(view);
          //document.title = viewData.title;
          return this.exists(viewData) ? view : this.defaultView;
        },
        activeSubView: function() {
          return this.routeParts[1] || null;
        },
        routeParts: function() {
          return this.route.substr(1).split('/');
        },
        activePost: function() {
          if (this.activeView != 'post') return null;
          var activePost = this.getPostData(this.activeSubView);
          if (this.exists(activePost)) {
            return activePost;
          } else return null;
        },
        activeTitle: function() {
          if (this.activeView == 'post') {
            return this.activePost.title;
          } else {
            return this.getViewData(this.activeView).title;
          }
        }
      },
      methods: {
        changeView: function(route) {
          this.route = route;
          
        },
        getViewData: function(slug) {
          return this.views.filter((view) => view.slug === slug)[0];
        },
        exists: function(val) {
          return (typeof val != 'undefined');
        },
        getPostData: function(slug) {
          return this.posts.filter((post) => post.slug === slug)[0];
        }
      }
  });

  $(window).on('hashchange', (e) => {
    vm.changeView(window.location.hash);
    document.title = vm.activeTitle;
  });

  console.log('All assets are loaded');
  
});