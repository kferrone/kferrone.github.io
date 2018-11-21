---
---

import * as app from '/assets/modules/index.mjs';

console.log('The special message is: ' + app.doHello());

const hybrids = window.hybrids;
const customElements = window.customElements;
var dataModel = app.getDataModel();
const routes = [];
dataModel.route = window.location.hash;

//const util = module.util; 
const ignoredElements = [
  'simple-counter'
];

{% include jsGenerator.js %}

/*$(window).on('hashchange', (e) => {
  vm.changeView(window.location.hash);
  document.title = vm.activeTitle;
});*/

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.config.ignoredElements = ignoredElements;
  
var vm = new Vue({
    el: '#belly',
    router: router,
    data: dataModel,
    beforeCreate: function() {
      console.log('Just saying hi before I create the vue instance.');
    },
    created: function() {
      console.log('The vue instance has been created.');
      //this.changeView(this.route);
      //document.title = this.activeTitle;
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