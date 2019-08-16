$(function() {
  $('.symptoms__wrapper .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.symptoms__wrapper').find('.tab-item').removeClass('active-tab').hide();
      $('.symptoms__wrapper .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });

});

