$(window).load(function(){
	// Продукты
	$('.info_deposit .slider').owlCarousel({
		nav: true,
		dots: false,
		loop: false,
		smartSpeed: 750,
		mouseDrag: false,
		onInitialized: function(event){
			setHeight( $(event.target).find('.item_wrap') )
		},
		onResized: function(event){
			$(event.target).find('.item_wrap').height('auto')

			setHeight( $(event.target).find('.item_wrap') )
		},
		responsive: {
			// breakpoint from 1101 up
			1200 : {
				items: 4,
				margin: 30,
			},
			// breakpoint from 1024 up
			1024 : {
				items: 4,
				margin: 15,
			},
			// breakpoint from 768 up
			768 : {
				items: 3,
				margin: 15,
			},
			// breakpoint from 480 up
			480 : {
				items: 2,
				margin: 15,
			},
			// breakpoint from 320 up
			0 : {
				items: 1,
				margin: 15,
			}
		}
	})
})

jQuery(function($) {
	$('.referal-link__link_btn a').on('click', function(event) {
		event.preventDefault();
		$('.s-partnership .link').attr('style', 'background-color: #7ccb44');
	})
});

// 