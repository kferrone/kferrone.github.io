import {blahBla} from '/assets/js/util.mjs';

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