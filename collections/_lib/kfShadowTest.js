---
---
customElements.define('kf-shadow-test',
class ShadowTest extends HTMLElement {
  
    // Can define constructor arguments if you wish.
    constructor() {
      // If you define a constructor, always call super() first!
      // This is specific to CE and required by the spec.
      super();
    
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