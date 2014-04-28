---
layout: page
title: Guide
---

## Installation

The fastest way is to use Github Pages:

1. Fork the [repository][0].
1. Set up your [custom domain][1].
1. Start blogging.

## Configuration

The Noita Theme options must be specified in the variable `noita` in the global [configuration][2] file. Page-level options can be set in the [front matter][3].

### Page Options Reference

<ul>
{% for p in site.pages %}
  {% if p.title contains 'page.' %}
<li><a href="{{ p.url }}">{{ p.title | remove: 'page.' }}</a></li>
  {% endif %}
{% endfor %}
</ul>

[0]: https://github.com/penibelst/jekyll-noita
[1]: https://help.github.com/articles/setting-up-a-custom-domain-with-pages
[2]: http://jekyllrb.com/docs/configuration/
[3]: http://jekyllrb.com/docs/frontmatter/
