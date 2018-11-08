---
---

define = window.hybrids.define
html = window.hybrids.html
ignoredElements = []

$(document).ready ->
    
    {% for view in site.views %}
    {% if view.type == 'coffee' or view.type == 'js' %}

    `{{ view.content }}`

    Vue.component('{{ view.selector }}',this.{{ view.class }})

    {% endif %}
    {% endfor %}

    ###
    {% for component in site.components %}
    {% if component.type == 'coffee' or component.type == 'js' %}

    `{{ component.content }}`

    {% case component.provider %}
    {% when 'vue' %}
    Vue.component('{{ view.selector }}',this.{{ view.class }})
    {% when 'hybrids' %}
    define('{{ component.selector }}', new {{ component.class }}());
    {% else %}
    console.log('The {{ component.selector }} does not have a provider')
    {% endcase %}
    

    {% endif %}
    {% endfor %}
    ###
    
    Vue.config.ignoredElements = [
        'simple-counter',
        'complex-counter',
        'kf-shadow-test'
    ]
    vueModel = 
        el: '#belly'
        data: JSON.parse($('script[id="data-model"]').html())
    vm = new Vue(vueModel)