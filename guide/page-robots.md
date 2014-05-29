---
title: page.robots
layout: page
permalink: /page-robots/
---

Adds a robots meta tag to the page. Read [Google Webmasters][0] for available directives.

## Type

`string` or `sequence`

## Example

Instruct web crawlers to not index the page and to not crawl any of the links on the page:

~~~yaml
---
robots:
  - noindex
  - nofollow
---
~~~

[0]: https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag
