$(document).ready(function() {

  $('#carousel-testimonials').carousel({
    interval: 5000
  });

  $('form.signup-1').validate({
      rules: {
          email: {
          minlength: 2,
          required: true,
          email: true
        }  
      },
      highlight: function(label) {
        $(label).closest('.form-control').addClass('has-error');
      },
      success: function(label) {
        $(label).text('OK!').addClass('valid').closest('.form-control').addClass('has-success');

      }, 
      messages: { 
       email: {
         email: "Your email address must be in the format of 'email@yourdomain.com'"
        }
      }
    });

    $('form.signup-2').validate({
      rules: {
          email: {
          minlength: 2,
          required: true,
          email: true
        }  
      },
      highlight: function(label) {
        $(label).closest('.form-control').addClass('has-error');
      },
      success: function(label) {
        $(label).text('OK!').addClass('valid').closest('.form-control').addClass('has-success');

      }, 
      messages: { 
       email: {
         email: "Your email address must be in the format of 'email@yourdomain.com'"
        }
      }
    });


   $('body header.top').anystretch("img/header_image.jpg", {speed: 150});	
	
});