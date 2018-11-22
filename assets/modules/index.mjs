---
---
import * as util from '/assets/modules/util.mjs';
util.getDataModel().then((response) => {
  var dataModel = response.data;
  var routes = [];

  Vue.config.ignoredElements = [
    'simple-counter',
    'complex-counter',
    'kf-shadow-test',
    'test-blog-post'
  ];

  Vue.filter('formatDate', function(value) {
    if (value) {
      return window.moment(String(value), 'YYYY-MM-DD hh:mm:ss z').format('DD MMMM YYYY');
    }
  });

  {% include jsGenerator.js %}
  
});