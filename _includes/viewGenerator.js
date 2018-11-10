{% for component in site.components %}
  {% if component.type == 'coffee' %}
    {{ component.content }}
  {% elsif component.type == 'js' %}
    {% include iife.js content=component.content %}
  {% endif %}
{% endfor %}

{% for component in site.views %}
  {% if component.type == 'coffee' %}
    {{ component.content }}
  {% elsif component.type == 'js' %}
    {% include iife.js content=component.content %}
  {% endif %}
{% endfor %}