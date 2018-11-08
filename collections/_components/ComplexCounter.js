---
title: Complex Counter
type: js
selector: complex-counter
class: ComplexCounter
template: inline
provider: hybrids
---

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