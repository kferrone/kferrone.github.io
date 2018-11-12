---
---
import('/assets/modules/index.mjs').then((app) => {

  console.log('The special message is: ' + app.doHello());

  const hybrids = window.hybrids;
  const customElements = window.customElements;
  var dataMOdel = app.getDataModel();
  var hash = window.location.hash.substr(1);
  if (hash != '') dataMOdel.activeView = hash;
  
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
          console.log('The vue instance has been created.' + window.location.hash.substr(1));
          
        },
        computed: {
          
        },
        methods: {
          changeView: function(view) {
            this.activeView = view;
          },
          getViewData: function(slug) {
            return this.views.filter((view) => view.slug === slug)[0];
          }
        }
    });

    $(window).on('hashchange', (e) => {
      vm.changeView(window.location.hash.substr(1));
    });
  
    console.log('All assets are loaded');
    
  });

});
