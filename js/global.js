;(function($) {
  'use strict';

  var eCommerce = eCommerce || {};




  // Plugins
  eCommerce.plugIns = {

    init: function() {
      this.fastClick();
      this.headRoom();
      this.parsley();
    },

    fastClick: function() {
      FastClick.attach(document.body);
    },

    headRoom: function() {
      $(".js-site-header").headroom({
        "offset": 0,
        "tolerance": 5,
        "classes": {
          "initial": "animated",
          "pinned": "slideDown",
          "unpinned": "slideUp"
        }
      });

      // to destroy
      $("#header").headroom("destroy");
    },

    parsley: function() {
      window.ParsleyValidator.setLocale('zh_cn');
    }
  };





  // INITS
  eCommerce.plugIns.init();
})(jQuery);