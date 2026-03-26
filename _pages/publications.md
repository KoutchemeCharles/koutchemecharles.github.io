---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

## Spotlight

<div style="margin-top: 0.5em;">
  <p>
    <strong><a href="https://koutche.me/cip25-aiep/">Aligning Small Language Models for Programming Feedback</a></strong> — 
    SIGCSE TS 2026 · with Juliette Woodrow & Chris Piech
  </p>
  <iframe 
    src="https://koutche.me/cip25-aiep/" 
    style="width: 100%; height: 500px; border: 1px solid #ddd; border-radius: 6px;"
    title="Aligning Small Language Models for Programming Feedback">
  </iframe>
</div>

## Selected Publications

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% assign sorted_pubs = site.publications | sort: "date" | reverse %}
{% for post in sorted_pubs %}
  {% include archive-publication.html %}
{% endfor %}
