
			$(window).load(function() {
				$("#status").fadeOut();
				$("#preloader").delay(350).fadeOut("slow");
			})

		
/*global $:false */
	  $(document).ready(function() {"use strict";
	    $( '.words' ).lettering('words');
	  });			
			
			
			
/*global $:false */
	$(function(){"use strict";
		$('#home').css({'height':($(window).height())+'px'});
		$(window).resize(function(){
		$('#home').css({'height':($(window).height())+'px'});
		});
	});






 $(function(){
            $('#maximage').maximage({
                cycleOptions: {
                    fx: 'fade',
                    speed: 1000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
                    timeout: 4000,
                    prev: '#arrow_left',
                    next: '#arrow_right',
                    pause: 1,
                    
                },
                onFirstImageLoaded: function(){
                    jQuery('#cycle-loader').hide();
                    jQuery('#maximage').fadeIn('slow');
                }
				
				
            });
    
        });			
	
	
	
	
	
		
/*global $:false */
$(document).ready(function(){"use strict";
	$(".scroll").click(function(event){

		event.preventDefault();

		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;

		$('html, body').animate({scrollTop:target_top}, 1400);
	});
});	


	$(document).ready(
	function() {  
		$("html").niceScroll();
		}
	);
	
$(function(){

   $('ul li a').click(function(){
      var item=$(this).parent();
       $('ul li').removeClass('current');
       item.addClass("current")
    });

});	

$(document).ready(function(){
		$("#navigation").sticky({topSpacing:0});
		
		$("ul#menu").click(function(){
			if( $("ul#menu li").css('display') != 'inline' ){
				if($("ul#menu").hasClass('showmenu')) {
        			$("ul#menu").removeClass('showmenu');
					$("ul#menu li").css('display','none');
    			} else {
					$("ul#menu").addClass('showmenu');
        			$("ul#menu li").css('display','block');
    			}
			}
		});
		
		$(window).resize(function() {
			if( $(window).width() >= 960 ){
				if( $("ul#menu li").css('display' ) == 'none' )
					$("ul#menu li").css('display','inline');
			}
			else{
				$("ul#menu li").css('display','none');
			}
		});
		
	});	
	

			$(function() {

				var $grid = $( '#tp-grid' ),
					$name = $( '#name' ),
					$close = $( '#close' ),
					$loader = $( '<div class="loader"><i></i><i></i><i></i><i></i><i></i><i></i><span>Loading...</span></div>' ).insertBefore( $grid ),
					stapel = $grid.stapel( {
						randomAngle : true,
						delay : 50,
						gutter : 70,
						pileAngles : 5,
						onLoad : function() {
							$loader.remove();
						},
						onBeforeOpen : function( pileName ) {
							$name.html( pileName );
						},
						onAfterOpen : function( pileName ) {
							$close.show();
						}
					} );

				$close.on( 'click', function() {
					$close.hide();
					$name.empty();
					stapel.closePile();
				} );

			} );
	

 
				
	
/*global $:false */
    var map;
    $(document).ready(function(){"use strict";
      map = new GMaps({
    disableDefaultUI: true,
    scrollwheel: false,
        el: '#map',
        lat: 44.789511,
        lng: 20.43633
      });
      map.drawOverlay({
        lat: map.getCenter().lat(),
        lng: map.getCenter().lng(),
        layer: 'overlayLayer',
        content: '<div class="overlay"></div>',
        verticalAlign: 'bottom',
        horizontalAlign: 'center'
      });
        var styles = [  
  {
    "elementType": "labels.icon",
    "stylers": [
      { "weight": 0.3 },
      { "saturation": -100 },
      { "lightness": -25 },
      { "visibility": "off" }
    ]
  },{
    "stylers": [
      { "hue": "#ff6e00" },
      { "lightness": -19 },
      { "saturation": -100 }
    ]
  },{
    "elementType": "labels.text.stroke",
    "stylers": [
      { "visibility": "simplified" }
    ]
  }
        ];
        
        map.addStyle({
            styledMapName:"Styled Map",
            styles: styles,
            mapTypeId: "map_style"  
        });
        
        map.setStyle("map_style");	  
    });		

$.extend($.easing, window.easing);

$.ajax({
  url: 'https://api.twitter.com/1/statuses/user_timeline.json?screen_name=envato&count=1&callback=?',
  dataType: 'json',
  success: function(data){
    $.each(data, function(i,item){
      ct = item.text;
      // include time tweeted - thanks to will
      mytime = item.created_at;
      var strtime = mytime.replace(/(\+\S+) (.*)/, '$2 $1')
      var mydate = new Date(Date.parse(strtime)).toLocaleDateString();
      var mytime = new Date(Date.parse(strtime)).toLocaleTimeString();
      ct = ct.replace(/http:\/\/\S+/g,  '<a href="$&" target="_blank">$&</a>');
      twitterURL = "http://twitter.com/";
      ct = ct.replace(/\s(@)(\w+)/g,    ' @<a href="'+twitterURL+'$2">$2</a>');
      ct = ct.replace(/\s(#)(\w+)/g,    ' #<a href="'+twitterURL+'search?q=%23$2" target="_blank">$2</a>');
      $("#jstweets").append('<div>'+ct + ' <small><i>(' + mydate + ' @ ' + mytime + ')</i></small></div>');
    });
  }
});


$("#rotator > div:gt(0)").hide();

setInterval(function() { 
  $('#rotator > div:first')
    .fadeOut(0)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#rotator');
},  3000);

 /*global $:false */
	$(window).load(function () {
	    var $container = $('.portfolio');
	    var $filter = $('#filter');
	    // Initialize isotope 
	    $container.isotope({
	        filter: '*',
	        layoutMode: 'fitRows',
	        animationOptions: {
	            duration: 750,
	            easing: 'linear'
	        }
	    });
	    // Filter items when filter link is clicked
	    $filter.find('a').click(function () {
	        var selector = $(this).attr('data-filter');
	        $filter.find('a').removeClass('current');
	        $(this).addClass('current');
	        $container.isotope({
	            filter: selector,
	            animationOptions: {
	                animationDuration: 750,
	                easing: 'linear',
	                queue: false,
	            }
	        });
	        return false;
	    });
	});	

$(document).ready(function() {
	$('.fancybox').fancybox();

			$('.fancybox-media')
				.attr('rel', 'media-gallery')
				.fancybox({
					openEffect : 'none',
					closeEffect : 'none',
					prevEffect : 'none',
					nextEffect : 'none',

					arrows : true,
					helpers : {
						media : {},
						buttons : {}
					}
				});	


	
});





$(document).ready(function(){
		
		//.parallax(xPosition, speedFactor, outerHeight) options:
		//xPosition - Horizontal position of the element
		//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
		//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
		$('#separator').parallax("50%", 0.2);
		$('#separator2').parallax("50%", 0.2);
		$('#separator3').parallax("50%", 0.2);
		$('#separator1').parallax("50%", 0.2);
		
	
	});	
