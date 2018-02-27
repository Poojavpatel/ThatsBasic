$(document).ready(function(){
	
});

/********************************* GREEN SOCK *************************************/
$(document).ready(function(){

	var header = $('#header'),
		h1 = $('h1'),
		image = $('img');

	TweenLite.to(header,1,{opacity:0 , y:50});
	
	/*syntax TweenLite.to(target,duration,{vars})
	Since it is a to element it will animate from current layout to 
	opacity=0  and 50 px down from its original position*/
	/*create vars so that the dom is not called repeatedly*/

	TweenLite.to(image,1,{width:100});
	/*changes the width of img from original to 100 at end of animation*/
	TweenLite.to(image,1,{x:200});
	/*animates position of image from original calculated to 200px to right*/
	TweenLite.from(image,1,{x:-200});
	/*animates position of image from 200px left to original calculated*/
	TweenLite.fromTo(image,1,{x:-200},{x:200});
	/*Start at x=-200 to x=200*/
	TweenLite.set(image,{x:-200});
	/*is used to simply set css elements without any animation */ 
	TweenLite.to(h1,1,{autoAlpha:1, delay:1});
	/*opacity 0 to 1 visibility hidden to visible with delay of 1s*/

	/*Easing functions*/
	TweenLite.to(image,1,{width:100 , ease:Power0.easeNone});  /*default*/
	/* power can be anything from 0 to 4 ease can be easeIn easeOut etc */

	
});
</script>


/******************************** SCROLL MAGIC ************************************/

	/*Step1: INIT SCROLLMAGIC and create controller
	Step2: CREATING SCROLLMAGIC SCENES and adding them to controller
	Step3: DURATION AND TRIGGERHOOK POSITION

	YOU CAN EITHER 

	 .setClassToggle	.setPin		.setTween(TweenMax.from())

	//create a new timeline
		var parallaxTl = new TimelineMax();
	//adding tweens to the timeline
		parallaxTl
			.from('.content-wrapper', 0.9 ,{ autoAlpha:0 , ease:Power0.easeNone} ,0.9)/* delay of 0.3 */
			/*.from('.bcg', 2, {y:'-50%' , ease:Power0.easeNone} ,0)/* should start at 0 along with content wrapper and not after it
			;*/
	//then add timeline to tween          .setTween(parallaxTl)	
		 	
	
	var controller = new ScrollMagic.Controller();  /*tells browser to use scrollbar and trigger animations*/
	
	/* FADE IN PROJECT1 WHEN IT COMES INTO VIEW */
	// var ourScene =new ScrollMagic.Scene({
	// 	triggerElement:'#project01 img',
	// 	duration:'90%',   /*duration 300 is 300px ;100% is 100vh*/
	// 	triggerHook:0.95,     /*hook 0:goes to top of screen  1:goes to bottom of screen */
	// 	//reverse:false,      /*animation will only happen once */

	// })
	// .setClassToggle('#project01','fade-in') /* toggle class fade-in on project01 */
	// .addIndicators({
	// 	/* To change name n color of indicators*/
	// 	name:'Fadescene',
	// 	colorTrigger:'yellow',
	// 	indent:5,
	// 	colorStart:'purple',
	// 	colorEnd:'purple'
	// })
	// .addTo(controller);

	/* LOOP THROUGH EACH PROJECT ELEMENT*/
	$('.project').each(function(){

		console.log(this);
		//by consolelog we see that img is 0th child in children list
		var ourScene =new ScrollMagic.Scene({
		 	triggerElement:this.children[0],
		 	duration:'90%',   /*duration 300 is 300px ;100% is 100vh*/
		 	triggerHook:0.9,     /*hook 0:goes to top of screen  1:goes to bottom of screen */
		 	//reverse:false,      /*animation will only happen once */

	 	})
		 .setClassToggle(this,'fade-in') /* toggle class fade-in on project01 */
		 .addIndicators({
		 	/* To change name n color of indicators*/
		 	name:'Fadescene',
		 	colorTrigger:'purple',
		 	indent:5,
		 	colorStart:'purple',
		 	colorEnd:'purple'
		 })
	 	.addTo(controller);

	});

	/* PINNING THE INTRO FOR 20% */

	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement:'#intro',
		duration:'28%',
		triggerHook: 0,
	})
	.setPin('#intro',{pushFollowers:false}) /*using pushfollowers the main goes over the header*/
	.addIndicators({
		name:'Pin',
		colorTrigger:'orange',
		indent:0,
		colorStart:'orange',
		colorEnd:'orange'
	})
	.addTo(controller);

	/* PINNING THE SAME ELEMENT MULTIPLE TIME */

	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement:'#project01',
		//duration:'20%',
		triggerHook: 0.6,
	})
	.setPin('#intro',{pushFollowers:false}) /*using pushfollowers the main goes over the header*/
	.addIndicators({
		name:'Pin2',
		colorTrigger:'yellow',
		indent:0,
		colorStart:'yellow',
		colorEnd:'yellow'
	})
	.addTo(controller);

	/* PARALLAX SCENE */

	// var parallaxScene = new ScrollMagic.Scene({
	// 	triggerElement:'.bcg-parallax',
	// 	triggerHook:1,
	// 	duration:'105%',
	// })
	// .setTween(TweenMax.from('.bcg', 1, {y:'-50%' , ease:Power0.easeNone} ))
	// .addIndicators({
	// 	name:'parallax',
	// 	colorTrigger:'green',
	// 	colorStart:'green',
	// 	colorEnd:'green'
	// })
	// .addTo(controller);

	/* FADE IN TEXT ON PARALLAX SCENE A LITTLE BIT AFTER IT COMES ON */

	// we will need to create a new timeline
	var parallaxTl = new TimelineMax();
	//adding tweens to the timeline
	parallaxTl
		.from('.content-wrapper', 0.9 ,{ autoAlpha:0 , ease:Power0.easeNone} ,0.9)/* delay of 0.3 */
		.from('.bcg', 2, {y:'-50%' , ease:Power0.easeNone} ,0)/* should start at 0 along with content wrapper and not after it*/
		;

	var parallaxScene = new ScrollMagic.Scene({
	 	triggerElement:'.bcg-parallax',
	 	triggerHook:1,
	 	duration:'100%',
	})
	 .setTween(parallaxTl)
	 .addIndicators({
	 	name:'parallax',
	 	colorTrigger:'green',
	 	colorStart:'green',
	 	colorEnd:'green'
	})
	 .addTo(controller);

/******************************** SCROLLMAGIC ENDS *************************************/
	









