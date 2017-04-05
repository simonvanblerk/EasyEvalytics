var easyEvalytics = (function(){
  var init = function() {
    $('[data-event]').each(function(){
      $(this).on($(this).data('event'), function(e) {
        ga('send', 'event', $(this).data('category'), $(this).data('action'), $(this).data('label'), $(this).data('value'));
      });
    });
  };

  return {
    'init': init
  }
})();

$(window).on('load', function(){
  easyEvalytics.init();
});
