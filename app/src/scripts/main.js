$(document).ready(function() {	

	var currSlide = 1;
	var prevSlide = 0;

	$('.slider__button').on('click', function(e) {
		e.preventDefault();

		prevSlide = currSlide;
		currSlide = currSlide == 1 ? 2 : 1;

		var $that          = $(this);
		var $slider        = $that.closest('.slider');

		$('.slider__item').toggleClass('is-active');

		animateSlides();

	});

	var animateSlides = function() {

		if ( currSlide == 1 ) {

			if ( prevSlide == 2 ) {
				$('#picture, #lock').attr('class', 'is-resetted');
			}

			$('#line_04, #kinoutv, #sofa, #tv, #tv_picture').removeClass('is-active');

			$('#picture, #cloud, #lock').removeClass('is-translated');
			
			$('#char_blond, #line_01, #char_asian, #char_black').removeClass('is-hidden');

			$('#line_01, #line_02, #line_03, #hl_blond, #hl_asian, #hl_black').addClass('is-active');

			if ( prevSlide == 2 ) {
				setTimeout(function(){
					$('#picture, #lock')
						.removeClass('is-resetted')
						.addClass('is-active');
				}, 300);
			} else {
				$('#picture, #lock').addClass('is-active');
			}
		}
		else {

			$('#cloud, #picture, #lock').addClass('is-translated');

			$('#char_blond, #line_01, #char_asian, #char_black').addClass('is-hidden');

			$('#picture, #lock, #line_01, #line_02, #line_03, #hl_blond, #hl_asian, #hl_black').removeClass('is-active');

			$('#line_04, #kinoutv, #sofa, #tv, #tv_picture').addClass('is-active');
		}
	}

	imagesLoaded( '#container', function() {
		$('.slider__item').eq(0).addClass('is-active');
		animateSlides();
	});

    $("#contactForm").submit(function()
    {
        var $form = $(this), data = $(this).serialize();

        $.get('http://k-api.cloudapp.net/crm/contact/post?' + data, function()
        {
            $form.get(0).reset();

            swal("Merci !", "Nous avons bien reçu votre message.", "success");
        },
        'json');

        return false;
    });
});