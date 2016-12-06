// GLOBAL
var root = location.protocol + "//" + location.host;

$(document).ready(function() {


	////////////////////////////////////////////////
	////////////////                 ///////////////
	////////////////    FUNCTIONS    ///////////////
	////////////////                 ///////////////
	////////////////////////////////////////////////

	//=require functions/**/*.js 


	////////////////////////////////////////////////
	////////////////                 ///////////////
	////////////////    PARTIALS     ///////////////
	////////////////                 ///////////////
	////////////////////////////////////////////////

	var xsmall		= 480,
		small		= 600,
		medium		= 768,
		large		= 992,
		xlarge		= 1200,
		xxlarge		= 1500;
    
	//=require partials/*.js 
		
	////////////////////////////////////////////////
	////////////////                 ///////////////
	////////////////    LISTENERS    ///////////////
	////////////////                 ///////////////
	////////////////////////////////////////////////

	////////////////////////////////////////////////
	// ON RESIZE
	var updateLayout = _.debounce(function(e) {

		forwidth();

	}, 500);
	window.addEventListener("resize", updateLayout, false);

	////////////////////////////////////////////////
	// ON scroll throttle
	// var scroll = _.throttle(function(e) {

	// }, 500);
	// window.addEventListener("scroll", scroll, false);
	
	//ON scroll
	//$(window).scroll(function(){

	//});

	// $(window).load(function() {

	// });

});