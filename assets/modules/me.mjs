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

// Make <simple-counter> custom element alive!
define('simple-counter', SimpleCounter);