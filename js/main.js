jQuery(document).ready(function(){

	"use strict";

	$('.slider').ripples({
	  dropRadius: 10,
	  perturbance: 0.01
	});


	$(".text").typed({
			strings: ["I Am <strong class='primary'>MOKAMMEL.</strong>", "I Am a <strong class='secondary'>Full-Stack Developer.</strong>"],
			typeSpeed: 0,
			loop:true
		});

	$(window).scroll(function(){

		var top = $(window).scrollTop();

		if(top>70)
		{
			$('header').addClass('transparent-bg');
		}

		else
		{
			if($('header').hasClass('transparent-bg'))
			{
				$('header').removeClass('transparent-bg');
			}
		}

	});

});