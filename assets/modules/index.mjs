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
        this.setTitle(this.getViewData(this.$route.path).title);
      },
      computed: {
        activeView: function() {
          return this.getViewData(this.$route.path);
        }
      },
      watch: {
        activeView: function(activeView) {
          this.setTitle(activeView.title);
        }
      },
      methods: {
        setTitle: function(title) {
          document.title = title;
        },
        getViewList: function() {
          return this.views
                    .filter(view => view.order != 0 && !view.draft)
                    .sort((a,b) => a.order - b.order);
        },
        getViewData: function(path) {
          return this.views.filter((view) => view.permalink === path)[0];
        },
        exists: function(val) {
          return (typeof val != 'undefined');
        },
        getPostMeta: function(slug) {
          return this.posts.filter((post) => post.slug === slug)[0];
        }
      }
    });
});