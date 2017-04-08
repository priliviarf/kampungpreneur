	$(document).ready(function(){
	    //navbar
	    $(window).scroll(function(){
	    	if($(window).scrollTop() > $('#navbar').innerHeight()){
	    		$('#navbar').addClass('floatNav') ;
	    	}else{
	    		$('#navbar').removeClass('floatNav') ;
	    	}
	    }) ;
	    $('body').scrollspy({
	    	target : '#navbar'
	    }) ;


		// to ease when click '#' url
		$(document).on('click', 'a', function(event){
		    event.preventDefault();

		    $('html, body').animate({
		        scrollTop: $( $.attr(this, 'href') ).offset().top
		    }, 1000);
		});

		//owl carousel
		var owl = $('.carousel-1');
		owl.owlCarousel({
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:3
		        }
		    },
		    loop:true,
		    margin:10,
		    autoplay:true,
		    autoplayTimeout:5000,
		    autoplayHoverPause:true
		});

		$('.carousel-1').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:3
		        }
		    }
		})

		$('.carousel-2').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:4
		        }
		    }
		})

		var owl2 = $('.carousel-3');
		owl2.owlCarousel({
		    items:1,
		    loop:true,
		    margin:10,
		    autoplay:true,
		    autoplayTimeout:5000,
		    autoplayHoverPause:true
		});

		//count
		$(window).scroll(function(){
	    	if($(window).scrollTop() > $('#navbar').innerHeight()){
	    		$('#navbar').addClass('floatNav') ;
	    	}else{
	    		$('#navbar').removeClass('floatNav') ;
	    	}
	    }) ;
		$('.count').each(function () {
		    $(this).prop('Counter',0).animate({
		        Counter: $(this).text()
		    }, {
		        duration: 2000,
		        easing: 'swing',
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    });
		});

		//lightcase
		$('a[data-rel^=lightcase]').lightcase();

	});