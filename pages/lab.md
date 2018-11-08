---
layout: default
permalink: /lab/
---

# Welcome to my laboratory

I should do something interesting instead of fuck around. 

So here we go.

## Examples

### Vue JS example

{% raw %}
<div id="bubsss">
  <p>{{ message }}</p>
</div>
{% endraw %}

### Importing Html With XMLHttpRequest

<script type="module">
    import {addTextToBody, includeHTML} from '/assets/js/util.mjs';
    import('/assets/js/me.mjs');

    addTextToBody('Modules are pretty cool.');

    
includeHTML();
</script>

<div w3-include-html="/assets/components/thing.html"></div>

### A Custom Web Component

<kf-shadow-test>
</kf-shadow-test>

<simple-counter>
</simple-counter>

<complex-counter>
</complex-counter>