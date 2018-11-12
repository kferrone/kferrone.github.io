---
---
import('/assets/modules/index.mjs').then((app) => {

  console.log('The special message is: ' + app.doHello());

  const hybrids = window.hybrids;
  const customElements = window.customElements;
  
  //const util = module.util; 
  const ignoredElements = [
    'simple-counter'
  ];

  {% include jsGenerator.js %}

  $(document).ready(function() {

    Vue.config.ignoredElements = ignoredElements;

    var vm = new Vue({
        el: '#belly',
        data: app.getDataModel(),
        beforeCreate: function() {
          console.log('Just saying hi before I create the vue instance.');
        },
        created: function() {
          console.log('The vue instance has been created.');
        }
    });
  
    console.log('All assets are loaded');
    
  });

});
