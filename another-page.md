---
layout: default
---

# Welcome to another page



<app-drawer>
yay_
</app-drawer>


<iframe 
  width="100%" 
  
  src="https://script.google.com/macros/s/AKfycbxGFscBnIwzmoetzX_FlfU8Ixt4qob92jErww2Tkg/exec"></iframe>

<iframe src="https://kellyferrone-211016.appspot.com/" style="overflow: auto;"></iframe>

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

[back](./)

{% include image.html image_id='1ntpV6zc3xmmelYRqmUL366MAyKOwQo5j-w' %}

{% for repository in site.github.public_repositories %}
  * [{{ repository.name }}]({{ repository.html_url }})
{% endfor %}