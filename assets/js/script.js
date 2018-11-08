window.customElements.define(
  'kf-shadow-test', 
  class ShadowTest extends HTMLElement {

  // Can define constructor arguments if you wish.
  constructor() {
    // If you define a constructor, always call super() first!
    // This is specific to CE and required by the spec.
    super();
  
    console.log('Howdy everyone');
  
    // Setup a click listener on <app-drawer> itself.
    this.addEventListener('click', e => {
      console.log('I was clicked bro');
    });
  
    const shadow = this.attachShadow({mode: 'open'});
    shadow.innerHTML = '<h1>Hello Shadow DOM</h1>';
  
  }
  
  toggleDrawer() {
    
  }
  });

//check this one out: https://alligator.io/vuejs/vue-integrate-web-components/
//and this one: http://vuetips.com/vue-web-components
$(document).ready(function() {
  
  Vue.config.ignoredElements = [
    'simple-counter',
    'complex-counter'
  ];

  var vm = new Vue({
      el: '#belly',
      data: {
          bellySound: 'grrrrrrrrrr',
          coolio: 'Super cool stuff goin down.'
      }
  });
  console.log('All assets are loaded');

})

