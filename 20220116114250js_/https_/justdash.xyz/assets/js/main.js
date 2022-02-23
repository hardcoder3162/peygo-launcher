var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function ($) {
    "use strict";
    
    new WOW().init();  
    
    /*---background image---*/
	function dataBackgroundImage() {
		$('[data-bgimg]').each(function () {
			var bgImgUrl = $(this).data('bgimg');
			$(this).css({
				'background-image': 'url(' + bgImgUrl + ')', // + meaning concat
			});
		});
    }
    
    $(window).on('load', function () {
        dataBackgroundImage();
    });
    

    /*---stickey menu---*/
    $(window).on('scroll',function() {    
           var scroll = $(window).scrollTop();
           if (scroll < 100) {
            $(".sticky-header").removeClass("sticky");
           }else{
            $(".sticky-header").addClass("sticky");
           }
    });

    // Slick Slider Activation
    var $sliderActvation = $('.slick__activation');
    if($sliderActvation.length > 0){
        $sliderActvation.slick({
          prevArrow:'<button class="prev_arrow"><img width="17" height="24" src="assets/img/icon/navigation-arrow2.webp" alt=""></button>',
          nextArrow:'<button class="next_arrow"><img width="17" height="24" src="assets/img/icon/navigation-arrow1.webp" alt=""></button>',
        });
    };

    // Slick Slider Activation2
    var $sliderActvation = $('.slick__activation2');
    if($sliderActvation.length > 0){
        $sliderActvation.slick({
          prevArrow:'<button class="prev_arrow"><i class="icofont-long-arrow-left"></i></button>',
          nextArrow:'<button class="next_arrow"><i class="icofont-long-arrow-right"></i></button>',
        });
    };


    /*--- Magnific Popup Video---*/
    $('.video_popup').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });

    $('.popup_img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    

     /*--- counterup activation ---*/
     $('.counterup').counterUp({
        delay: 20,
        time: 2000
    });
 
    // niceselect activation
    $(document).ready(function() {
      $('select,.select_option').niceSelect();
    });
    
    // Scroll to top
    scrollToTop();

    function scrollToTop() {
        var $scrollUp = $('#scroll-top'),
            $lastScrollTop = 0,
            $window = $(window);

        $window.on('scroll', function () {
            var st = $(this).scrollTop();
            if (st > $lastScrollTop) {
                $scrollUp.removeClass('show');
            } else {
                if ($window.scrollTop() > 200) {
                    $scrollUp.addClass('show');
                } else {
                    $scrollUp.removeClass('show');
                }
            }
            $lastScrollTop = st;
        });

        $scrollUp.on('click', function (evt) {
            $('html, body').animate({scrollTop: 0}, 600);
            evt.preventDefault();
        });
    }
    scrollToTop();
    
    
    /*---Off Canvas Menu---*/
    var $offcanvasNav = $('.offcanvas_main_menu'),
        $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="icofont-simple-down"></i></span>');
    
    $offcanvasNavSubMenu.slideUp();
    
    $offcanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.siblings('ul').slideUp('slow');
            }else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
            }
        }
        if( $this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/) ){
        	$this.parent().toggleClass('menu-open');
        }else if( $this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/) ){
        	$this.toggleClass('menu-open');
        }
    });

     
    
})(jQuery);	




}
/*
     FILE ARCHIVED ON 11:42:50 Jan 16, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:05:52 Feb 18, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 5156.89
  exclusion.robots: 0.137
  exclusion.robots.policy: 0.128
  RedisCDXSource: 0.657
  esindex: 0.009
  LoadShardBlock: 5131.51 (3)
  PetaboxLoader3.datanode: 5086.194 (4)
  CDXLines.iter: 21.632 (3)
  PetaboxLoader3.resolve: 102.621 (2)
  load_resource: 62.107
*/