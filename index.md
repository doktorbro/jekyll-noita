---
layout: page
title: Florian sortiert Weine
---

## Sorted by url
{% assign sorted_by_url = site.pages | sort: 'url' %}
<ul>
{% for p in sorted_by_url %}<li>{{ p.url }}</li>{% endfor %}
</ul>

## Sorted by title

{% assign sorted_by_title = site.pages | sort: 'title' %}
<ul>
{% for p in sorted_by_title %}<li>{{ p.url }}</li>{% endfor %}
</ul>
