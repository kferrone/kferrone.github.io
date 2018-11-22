---
title: Complex Counter
type: js
selector: complex-counter
class: ComplexCounter
template: inline
provider: hybrids
---

const hybrids = window.hybrids;
const define = hybrids.define;
const html = hybrids.html;

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

define('complex-counter',new ComplexCounter());