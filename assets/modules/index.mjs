---
---
import * as util from '/assets/modules/util.mjs';
util.getDataModel().then((response) => {
  var dataModel = response.data;
  var routes = [];

  {% include jsGenerator.js %}

  Vue.config.ignoredElements = [
    'simple-counter',
    'complex-counter',
    'kf-shadow-test',
    'test-blog-post'
  ];
    
  var vm = new Vue({
      el: '#belly',
      router: new VueRouter({routes}),
      data: dataModel,
      beforeCreate: function() {
        console.log('Just saying hi before I create the vue instance.');
      },
      created: function() {
        console.log('The vue instance has been created.');
      },
      computed: {
        
      },
      methods: {
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
});