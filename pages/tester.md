---
layout: default
permalink: /tester/
title: Tester
tags: pages
---

{% for cat in site.categories %}
    - {{ cat | first | strip_html  }}
{% endfor %}

{% assign posts = site.posts%}
{% for post in posts %}
    {% include frontMatter.json slug=post.slug key='posts' %}{% unless forloop.last %},{% endunless %}
{% endfor %}