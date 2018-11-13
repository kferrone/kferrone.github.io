---
layout: default
permalink: /tester/
title: Tester
tags: pages
---

{% for cat in site.categories %}
    - {{ cat | first | strip_html  }}
{% endfor %}

{% assign pages = site.pages %}
{% for page in pages %}
    - The coolness: {{ page.name }} - {{ site.url }}{{ page.url }}
    {% for val in page %}
        - {{ val[0] }}
    {% endfor %}
{% endfor %}

