var easyEvalytics = (function(){
  var init = function() {
    $('[data-event]').each(function(){
      var event = $(this).data('event');
      $(this).on(event, function(e) {
        var category = $(this).data('category');
        var action = $(this).data('action');
        var label = $(this).data('label');
        var value = $(this).data('value');
        ga('send', 'event', category, action, label, value);
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
