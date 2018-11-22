---
---
import * as util from '/assets/modules/util.mjs';
util.getDataModel().then((response) => {
  var dataModel = response.data;
  var moment = window.moment;
  var hybrids = window.hybrids;
  var customElements = window.customElements;
  var routes = [];

  Vue.config.ignoredElements = [
    'simple-counter',
    'complex-counter',
    'kf-shadow-test',
    'test-blog-post'
  ];

  {% include jsGenerator.js %}
  
});