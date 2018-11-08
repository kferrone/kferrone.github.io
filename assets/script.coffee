---
---
$(document).ready ->
    
    {% for view in site.views %}
    {% if view.type == 'coffee' %}

    `{{ view.content }}`

    Vue.component('{{ view.selector }}',this.{{ view.class }})

    {% endif %}
    {% endfor %}
    
    Vue.config.ignoredElements = [
        'simple-counter',
        'complex-counter',
        'kf-shadow-test'
    ]
    vueModel = 
        el: '#belly'
        data: JSON.parse($('script[id="data-model"]').html())
    vm = new Vue(vueModel)