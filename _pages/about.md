---
permalink: /
title: "Hello there, welcome!"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

My name is Charles but everyone calls me Charlie. I am a postdoctoral researcher in the Computer Science department at Aalto University, working at the intersection of natural language processing and computing education. I am developping methods and frameworks for aligning language models with pedagogical objectives, with applications in automated programming feedback generation and evaluation, and simulated learners. I focus particularly on lightweight, open models that can be safely deployed in educational contexts. 

My PhD [dissertation](https://aaltodoc.aalto.fi/items/b104a6ac-edc9-437d-af91-ad312714febe) laid the groundwork for this.

## News

<div style="
max-height: 500px;
overflow-y: auto;
padding: 1em;
margin: 1em 0;
border: 1px solid rgba(128,128,128,0.35);
border-radius: 10px;
background: rgba(128,128,128,0.06);
" markdown="0">
{% for item in site.data.news %}
{% include archive-news.html date=item.date title=item.title excerpt=item.excerpt link=item.link image=item.image %}
{% endfor %}
</div>
