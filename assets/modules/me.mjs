import {blahBla} from '/assets/modules/util.mjs';

console.log(blahBla())

const define = window.hybrids.define;
const html = window.hybrids.html;

const SimpleCounter = {
    count: 0,
    render: ({ count }) => html`
        <button onclick="${host => {host.count += 1; }}">
        Simple Count: ${count}
        </button>
    `
};

class ComplexCounter {
    constructor() {
        this.count = 0;
        this.render = ({ count }) => html`
            <button onclick="${host => {host.count += 1; }}">
            Complex Count: ${count}
            </button>
        `
    } 

}

// Make <simple-counter> custom element alive!
define('simple-counter', SimpleCounter);
define('complex-counter', new ComplexCounter());

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