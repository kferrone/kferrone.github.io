{% for view in site.views %}
{% if view.type == 'coffee' or view.type == 'js' %}

{{ view.content | normalize_whitespace }}

Vue.component('{{ view.selector }}',this.{{ view.class }})

{% endif %}
{% endfor %}

{% for component in site.components %}
  {% if component.type == 'coffee' or component.type == 'js' %}

    {{ component.content }}

    {% case component.provider %}
      {% when 'hybrids' %}
        define('{{ component.selector }}',new {{ component.class }}());
        ignoredElements.push('{{ component.selector }}');
      {% when 'vue' %}
        Vue.component('{{ component.selector }}',this.{{ component.class }})
      {% when 'webComponents' %}
        window.customElements.define('{{ component.selector }}',{{ component.class }});
        ignoredElements.push('{{ component.selector }}');
    {% endcase %}
  {% endif %}
{% endfor %}