
var controller = new ScrollMagic.Controller();

$(function () { 


	var desktopController = null;
    
    //set initial values for page width and item height
    var width = $(window).width()
    
    function initScrollMagic(){
        
        //scrollmagic functions

        //////////////////
		//	Vita    	//
		//////////////////
		desktopController = new ScrollMagic.Controller();

		$('.timeline > li').each(function(){
	    	var element = this;


			var scene21 = new ScrollMagic.Scene({
				triggerElement: element,
				duration: 200
			})
			.on("enter", function (e) {
				$direction = e.target.controller().info("scrollDirection");

				$(element).addClass('increase');
			})
			.on("leave", function (e) {
				$direction = e.target.controller().info("scrollDirection");
				$(element).removeClass('increase');
			})
			.addTo(desktopController);
		});
    }
    
    //767 is my mobile breakpoint
    if( width > 767) {
        initScrollMagic()
    }
    
    $(window).resize(function(){
        //reset values when page size changes
        width = $(window).width()
        
        if( width < 768 ) {
            //you can just use 'controller' here as it will return true or false, you dont need all the conditionals
            if (controller) {
                controller = controller.destroy(true)
            }
        } else if ( width > 767 ) {
            //same here 
            if ( !controller ) {
                initScrollMagic()
            }
        }
    });

	//////////////////
	//	Navigation 	//
	//////////////////

	$('.solid').each(function(){
    	var solid = this;
		var id = this.getAttribute('id');

        var addShadow = new ScrollMagic.Scene({
			triggerElement: solid,
			triggerHook: 'onLeave',
			offset: -70
		})
		.on("enter leave", function (e) {
			$direction = e.target.controller().info("scrollDirection");

			if($direction == "FORWARD"){
				$(".navbar-custom").addClass("shadow");	
			}
			else if( !(id.includes("team")) ){
				$(".navbar-custom").removeClass("shadow");
			}
		})
		.addTo(controller);

	});



	$('.transparent').each(function(){
    	var transparent = this;

		var removeShadow = new ScrollMagic.Scene({
			triggerElement: transparent,
			triggerHook: 'onLeave',
			offset: -70
		})
		.on("enter leave", function (e) {
			$direction = e.target.controller().info("scrollDirection");

			if($direction == "FORWARD"){
				$(".navbar-custom").removeClass("shadow");		
			}
			else if($direction == "REVERSE"){			
				$(".navbar-custom").addClass("shadow");	
			}
		})
		.addTo(controller);

	});


	//////////////
	//	Header 	//
	//////////////
	var scene0 = new ScrollMagic.Scene({
		triggerElement: "#header",
	})
	.setTween("#header", 4, { backgroundColor: "rgba(0,0,0,0.1)" })
	.addTo(controller);

	var sceneA = new ScrollMagic.Scene({
		triggerElement: "#header",
		duration: '100%'
	})
	.setTween(".headerBg", {y: "-20%", ease: Linear.easeNone})
	.addTo(controller);


	//////////////////
	//	Portfolio 	//
	//////////////////
	var portfolioScene = new ScrollMagic.Scene({
		triggerElement: "#portfolio",
		triggerHook: 'onEnter'
	})
	.on("enter leave", function (e) {
		$direction = e.target.controller().info("scrollDirection");

		if($direction == "FORWARD"){
			$(".portfolioBg").css("z-index","-1");
			$("#preContact").css("z-index","-2");
			$(".headerBg").css("z-index","-2");		
		}
		else{
			$(".portfolioBg").css("z-index","-2");
			$("#preContact").css("z-index","-2");
			$(".headerBg").css("z-index","-1");	
		}
	})
	.addTo(controller);

	var scene1 = new ScrollMagic.Scene({
		triggerElement: "#portfolio",
		triggerHook: 'onEnter',
		duration: '200%'
	})
	.setTween(".portfolioBg", {y: "-20%", ease: Linear.easeNone})
	.addTo(controller);

});

	//////////////////
	//	Contact 	//
	//////////////////

	var contactScene = new ScrollMagic.Scene({
		triggerElement: "#contact",
		duration: '100%'
	})
	.setTween(".contactBg", {y: "-20%", ease: Linear.easeNone})
	.addTo(controller);


//because fuc*ing IE & Edge can't do background-attached: fixed;

if(navigator.userAgent.match(/Trident\/7\./)) { // if IE
        $('body').on("mousewheel", function () {
            // remove default behavior
            event.preventDefault(); 

            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
}