
//scrollmagic controller for desktop and mobile
var controller = new ScrollMagic.Controller();

$(function () { 


	var desktopController = null;
    
    //set initial values for page width and item height
    var width = $(window).width()
    
    function initScrollMagic(){
        
        //scrollmagic functions for desktop
		desktopController = new ScrollMagic.Controller();

		//////////////
		//	Header 	//
		//////////////

		var sceneA = new ScrollMagic.Scene({
			triggerElement: "#header",
			offset: '-10%',
			duration: '110%'
		})
		.on("enter", function (e) {
			$(".portfolioBg").css("display", "none");
			$(".contactBg").css("display", "none");
			$(".headerBg").css("display", "block");		
		})
		.setTween(".headerBg", {y: "-20%", ease: Linear.easeNone})
		.addTo(desktopController);

		//////////////////
		//	Portfolio 	//
		//////////////////

		var scene1 = new ScrollMagic.Scene({
			triggerElement: "#portfolio",
			triggerHook: 'onEnter',
			offset: '-10%',
			duration: '200%'
		})
		.on("enter", function (e) {
			$(".portfolioBg").css("display", "block");
			$(".contactBg").css("display", "none");
			$(".headerBg").css("display", "none");		
		})
		.on("leave", function (e) {

			$direction = e.target.controller().info("scrollDirection");

			if($direction == "REVERSE"){			
				$(".portfolioBg").css("display", "none");
				$(".contactBg").css("display", "none");
				$(".headerBg").css("display", "block");	
			}	
		})
		.setTween(".portfolioBg", {y: "-20%", ease: Linear.easeNone})
		.addTo(desktopController);

		//////////////////
		//	Contact 	//
		//////////////////

		var contactScene = new ScrollMagic.Scene({
			triggerElement: "#contact",
			triggerHook: 'onEnter',
			offset: '-10%',
			duration: '110%'
		})
		.setTween(".contactBg", {y: "-20%", ease: Linear.easeNone})
		.on("enter", function (e) {
			$(".portfolioBg").css("display", "none");
			$(".contactBg").css("display", "block");
			$(".headerBg").css("display", "none");		
		})
		.on("leave", function (e) {

			$direction = e.target.controller().info("scrollDirection");

			if($direction == "REVERSE"){			
				$(".portfolioBg").css("display", "block");
				$(".contactBg").css("display", "none");
				$(".headerBg").css("display", "none");	
			}	
		})
		.addTo(desktopController);
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


	//////////////////
	//	Shadows 	//
	//////////////////
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


        //////////////////
		//	Vita    	//
		//////////////////

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
			.addTo(controller);
		});
});




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