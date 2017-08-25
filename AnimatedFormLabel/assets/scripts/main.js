(function($) {

  $(".gr_input").focus(function() {
    $(this).parent(".gr_form_row").addClass("active_input");
  });

  $(".gr_input").focusout(function() {
    if($(this).val() == "") {
      $(this).parent(".gr_form_row").removeClass("active_input")
    }
  })

})(jQuery);
