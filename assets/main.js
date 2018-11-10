---
---
import('/assets/modules/index.mjs').then((util) => {

  console.log('The special message is: ' + util.doHello());

  const hybrids = window.hybrids;
  const customElements = window.customElements;
  
  //const util = module.util; 
  const ignoredElements = [
    'simple-counter'
  ];

  util.addTextToBody('Modules are pretty cool.');

  util.includeHTML();

  {% include viewGenerator.js %}

  $(document).ready(function() {

    Vue.config.ignoredElements = ignoredElements;

    var vm = new Vue({
        el: '#belly',
        data: util.getDataModel()
    });
  
    console.log('All assets are loaded');

    util.getBlogPost('announcements','2018','11','04','StartingWithJekyll');
    
  });

});
