{% for component in site.lib %}
  {% if component.ext == '.coffee' %}
    {{ component.content }}
  {% elsif component.ext == '.js' %}
    {% include iife.js content=component.content %}
  {% endif %}
{% endfor %}

{% for component in site.components %}
  {% if component.ext == '.coffee' %}
    {{ component.content }}
  {% elsif component.ext == '.js' %}
    {% include iife.js content=component.content %}
  {% endif %}
{% endfor %}

{% for component in site.views %}
  {% if component.ext == '.coffee' %}
    {{ component.content }}
  {% elsif component.ext == '.js' %}
    {% include iife.js content=component.content %}
  {% endif %}
{% endfor %}