;(function($) {
  'use strict';

  var eCommerce = eCommerce || {};



  eCommerce.subscription = {
    submitBtn: null,

    init: function() {
      this.submitBtn = $('.js-subscription-submit');

      this.handleSubmitClick();
    },

    handleSubmitClick: function() {
      this.submitBtn.on('click', function() {
        ga('send', 'event', { eventCategory: 'email', eventAction: 'signup', eventLabel: 'signup_button'});
      });
    }
  };





  // INITS
  eCommerce.subscription.init();
})(jQuery);