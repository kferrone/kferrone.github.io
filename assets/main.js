---
---

const define = window.hybrids.define;
const html = window.hybrids.html;
const ignoredElements = [
  'simple-counter'
];

{% include viewGenerator.js %}

$(document).ready(function() {
  
  Vue.config.ignoredElements = ignoredElements;

  var vm = new Vue({
      el: '#belly',
      data: JSON.parse($('script[id="data-model"]').html())
  });
  console.log('All assets are loaded');

});