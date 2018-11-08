---
---

{% for view in site.views %}
{% if view.type == 'js' %}

`{{ view.content }}`

{% endif %}
{% endfor %}

b = new this.KillerView

console.log(b.msg)