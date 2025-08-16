(function ($) {
	"use strict";
    jQuery(document).ready(function($){
        

        $('.activeEventSlide').slick({
            dots: true,
            infinite: false,
            speed: 900,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: '<div class="slick--prev"></div>',
            nextArrow: '<div class="slick--next"></div>',
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
            });


        $('.mobileSlide').slick({
            dots: false,
            infinite: false,
            speed: 900,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: '<div class="slick--prev"></div>',
            nextArrow: '<div class="slick--next"></div>',
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: true,
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
            });


        // Remove hidden slides before initializing slick
        $('.activeGallerySlide > .gallerySingle').each(function(){
            if (!$(this).is(':visible')) {
            $(this).remove();
            }
        });


        $('.activeGallerySlide').slick({
            dots: true,
            infinite: false,
            speed: 900,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="slick--prev"></div>',
            nextArrow: '<div class="slick--next"></div>',
        });

        // Remove hidden slides after init
        // $('.activeGallerySlide').slick('slickFilter', function(index, slide){
        // return $(slide).css('display') !== 'none';
        // });



        $('.activeTeamSlide').slick({
            dots: true,
            infinite: false,
            speed: 900,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: '<div class="slick--prev"></div>',
            nextArrow: '<div class="slick--next"></div>',
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
            });


        $('.teamMobileSlide').slick({
            dots: false,
            infinite: false,
            speed: 900,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: '<div class="slick--prev"></div>',
            nextArrow: '<div class="slick--next"></div>',
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: true,
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
            });


            $('.popupVideo').magnificPopup({
                type: 'iframe'
            });


        $(document).on('click', 'a[href^="#"]', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        });


         $(".expandMenu").click(function() {
          $(".headerArea").toggleClass("openMenu");
         });


        if ($(window).width() < 992) {
 
            $('.headerNav li a').on('click', function() {
                $('.headerArea').toggleClass('openMenu');
            });
        }




      });
  
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 1) {
            $('.headerArea').addClass('sticky');
        } else {
            $('.headerArea').removeClass('sticky');
        }
    });




}(jQuery));
