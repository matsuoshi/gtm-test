jQuery(function() {
  $('a[data-gaevent]').on({
    click: function () {
      var url = $(this).attr('href');
      var label = $(this).data('gaevent').replace(/\-.*$/, '');

      gtag('event', $(this).data('gaevent'), {
        event_category: location.href.replace(/#.*$/, ''),
        event_label   : label,
        transport_type: 'beacon',
        event_callback: function(){
          if (label === 'btn') {
            location.href = url;
          }
        }
      });

      return (label !== 'btn');
    }
  });
});
