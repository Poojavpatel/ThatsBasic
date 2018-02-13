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








