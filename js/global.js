;(function($) {
  'use strict';

  var eCommerce = eCommerce || {};


  // Handle Language Version
  eCommerce.language = {
    urlPathName: null,
    chinaLink: null,
    engLink: null,

    init: function() {
      this.urlPathName = window.location.pathname;
      this.chinaLink = $('.js-china');
      this.engLink = $('.js-eng');

      this.handleActiveState();
    },

    handleActiveState: function() {
      if (this.urlPathName.indexOf('/en/') > -1) {
        this.engLink.addClass('is-active');
        return;
      }

      this.chinaLink.addClass('is-active');
    }
  };


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
      var pathName = window.location.pathname;

      // Set Validation Message to English if the page is English Version
      if(pathName.indexOf('_en') > -1) {
        window.ParsleyValidator.setLocale('en');
        return;
      }

      window.ParsleyValidator.setLocale('zh_cn');
    }
  };





  // INITS
  eCommerce.language.init();
  eCommerce.plugIns.init();
})(jQuery);