---
---

$(document).foundation();

{% for javascript in site.noita.javascripts %}
  {% include javascript %}
{% endfor %}
