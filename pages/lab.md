---
layout: default
permalink: /lab/
title: Laboratory
tags: pages
---

# Welcome to my {{ page.title }}

I should do something interesting instead of fuck around. 

So here we go.

## Examples

### Vue JS example

{% raw %}
<div>
  <p>My belly sounds like {{ bellySound }}</p>
</div>
{% endraw %}


### Importing Html With XMLHttpRequest

<!-- div w3-include-html="/assets/components/thing.html"></div -->


### A Custom Web Component

<kf-shadow-test>
</kf-shadow-test>

<simple-counter>
</simple-counter>

<complex-counter>
</complex-counter>

### Looping Through Pages Collection

{% for page in site.pages %}
  <p>{{ page.title }} </p>
{% endfor %}

### List of Static Files

{% for file in site.static_files %}
  - {{  file.name }}
{% endfor %}

### Checkin Collections

{% for collection in site.collections %}
  - {{  collection.directory }} 
{% endfor %}

### Checkin the edu

{% for school in site.education %}
  - {{  school.title }} 
{% endfor %}

### A List of Blog Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

### Check Out My Views

{% for view in site.views %}
  - {{  view.title }} - {{ view.type }}
{% endfor %}

### Here is a SPA Style View

<killer-view></killer-view>

### Custom Blog Post Element

<blog-post title="I am a blog title">
  <p>Really cool blog content goes here.</p>
  <p>Totally Sick dude!</p>
</blog-post>

<div id="apply-test">
  Hello there
</div>

### A PureCSS Table

<table class="pure-table">
    <thead>
        <tr>
            <th>#</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>1</td>
            <td>Honda</td>
            <td>Accord</td>
            <td>2009</td>
        </tr>

        <tr>
            <td>2</td>
            <td>Toyota</td>
            <td>Camry</td>
            <td>2012</td>
        </tr>

        <tr>
            <td>3</td>
            <td>Hyundai</td>
            <td>Elantra</td>
            <td>2010</td>
        </tr>
    </tbody>
</table>