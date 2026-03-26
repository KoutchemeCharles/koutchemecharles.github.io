---
layout: archive
title: ""
permalink: /publications/
author_profile: true
---
{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}
{% include base_path %}

{% assign sorted_pubs = site.publications | sort: "date" | reverse %}

{% comment %} Collect all unique themes {% endcomment %}
{% assign all_themes = "" %}
{% for post in sorted_pubs %}
  {% if post.theme %}
    {% unless all_themes contains post.theme %}
      {% assign all_themes = all_themes | append: post.theme | append: "|" %}
    {% endunless %}
  {% endif %}
{% endfor %}
{% assign theme_list = all_themes | split: "|" %}

{% comment %} Render grouped publications {% endcomment %}
{% for theme in theme_list %}
  <h2>{{ theme }}</h2><hr />
  {% for post in sorted_pubs %}
    {% if post.theme == theme %}
      {% include archive-publication.html %}
    {% endif %}
  {% endfor %}
{% endfor %}

{% comment %} Render publications without a theme {% endcomment %}
{% assign ungrouped = sorted_pubs | where_exp: "post", "post.theme == nil" %}
{% if ungrouped.size > 0 %}
  {% if theme_list.size > 0 %}
    <h2>Other</h2><hr />
  {% endif %}
  {% for post in ungrouped %}
    {% include archive-publication.html %}
  {% endfor %}
{% endif %}
