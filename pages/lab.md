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
  <p>My belly sounds like {{ me.bellySound }}</p>
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

### A List of Blog Posts

{% for post in site.posts %}
  
  - [{{ post.title }} - {{ post.id }}]({{ post.url }})
    {% for val in post %}
    - {{ val }} - {{ post[val] }}
    {% endfor %}
  
{% endfor %}

### Check Out My Views

{% assign views = site.views | where_exp:"item","item.ext == '.html'" %}
{% for view in views %}
  - {{  view.title }} - {{ view.type }} - {{ view.slug }} - {{ view.ext }}
{% endfor %}

### Here is the Data

{% for data in site.data %}
  - {{ data[0] }} - {{ data[1] | jsonify }}
{% endfor %}

### Here is a SPA Style View

{% include views.html %}

### Custom Blog Post Element

<test-blog-post title="I am a hybrid style blog component">
  <p>Really cool blog content goes here.</p>
  <p>Totally Sick dude!</p>
</test-blog-post>

<blog-post 
  title="I am a VueJS Component blog title"
  href="/technology/2018/11/04/StartingWithJekyll">
  <template slot="excerpt">
    I guess this could be the excerpt. If clicked, will I be replaced with blog content?
  </template>
</blog-post>

### Getting Values From Site

 - {{ site.title }}
 - {{ site.description }}
 - {{ site.domain }}

### Checking out the envrionment variable

The environment is: {{ jekyll.environment }}

### Building The Script Tags



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