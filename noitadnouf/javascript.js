---
---

{% include noitadnouf/foundation/js/vendor/jquery.js %}
{% include noitadnouf/foundation/js/foundation.min.js %}

$(document).foundation();

{% for javascript in site.noitadnouf.javascripts %}
  {% include javascript %}
{% endfor %}
