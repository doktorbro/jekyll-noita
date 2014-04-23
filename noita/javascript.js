---
---

{% include noita/foundation/js/vendor/jquery.js %}
{% include noita/foundation/js/foundation.min.js %}

$(document).foundation();

{% for javascript in site.noita.javascripts %}
  {% include javascript %}
{% endfor %}
