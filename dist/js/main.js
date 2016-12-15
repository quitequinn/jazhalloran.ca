// GLOBAL
var root = location.protocol + "//" + location.host;

$(document).ready(function() {


	////////////////////////////////////////////////
	////////////////                 ///////////////
	////////////////    FUNCTIONS    ///////////////
	////////////////                 ///////////////
	////////////////////////////////////////////////

	///////////////////////////////////////
	// Helper Functions
	
	function wFix(obj){
		
		$(obj).widowFix({
			prevLimit: 5,
			linkFix: true
		});
	}
	
	function countWords(s){
	
	    s = s.replace(/(^\s*)|(\s*$)/gi,"");
	    s = s.replace(/[ ]{2,}/gi," ");
	    s = s.replace(/\n /,"\n");
	    return s.split(" ").length;
	}
	
	// Check Uppercase
	String.prototype.isUpperCase = function() {
	
	    return this.valueOf().toUpperCase() === this.valueOf();
	};
	
	// Check Email
	function validateEmail(email) {
	
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		return re.test(email);
	}
	
	function newGUID() {
	    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
	        return v.toString(16);
	    });
	}


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
    	
    	var badge = 1;
    	var favicon = new Favico({
    	
    	    animation : 'popFade'
    	});
    	image = document.getElementById('fav1');
    	favicon.image(image);
    	
    	window.setInterval(function(){
    	
    	  if (badge === 1) {
    	
    	  	badge = 2
    	  	image = document.getElementById('fav1');
    	  } else if (badge === 2) {
    	  	
    	  	badge = 3
    	  	image = document.getElementById('fav2');
    	  } else if (badge === 3) {
    	  	
    	  	badge = 4
    	  	image = document.getElementById('fav3');
    	  } else if (badge === 4) {
    	  	
    	  	badge = 5
    	  	image = document.getElementById('fav4');
    	  } else if (badge === 5) {
    	  	
    	  	badge = 6
    	  	image = document.getElementById('fav3');
    	  } else if (badge === 6) {
    	  	
    	  	badge = 7
    	  	image = document.getElementById('fav3');
    	  } else {
    	  	
    	  	badge = 1
    	  	image = document.getElementById('fav2');
    	  }
    	  console.log(badge);
    	  favicon.image(image);
    	
    	}, 300);
    	
    	    	
    	///////////////////////////////////
    		// Global
    	///////////////////////////////////
    	
    	////////////////////////////////////////////////
    	// IF MOBILE
    	function isMobile() {
    	
    		if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/IEMobile/i)){
    	
    			return true; } else {
    	
    	 	return false; }
    	}
    	function iphone() {
    	
    		if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){
    	
    			return true; } else {
    	
    	 	return false; }
    	}
    	var isTouchDevice = "ontouchstart" in document.documentElement;
    	
    	////////////////////////////////////////////////
    	// GET VENDOR PREFIXES
    	var browser, webkit, touch;
    	
    	var prefix = (function () {
    	
    		var styles = window.getComputedStyle(document.documentElement, ""),
    			pre = (Array.prototype.slice
    				.call(styles)
    				.join("")
    				.match(/-(moz|webkit|ms)-/) || (styles.OLink === "" && ["", "o"])
    			)[1],
    			dom = ("WebKit|Moz|MS|O").match(new RegExp("(" + pre + ")", "i"))[1];
    		return {
    	
    			dom: dom,
    			lowercase: pre,
    			css: "-" + pre + "-",
    			js: pre[0].toUpperCase() + pre.substr(1)
    		};
    	})();
    	browser = prefix.lowercase;
    	
    	if (isTouchDevice) {
    	
    		touch = true;
    	} else {
    	
    		touch = false;
    	}
    	if (navigator.userAgent.indexOf("Safari") !== -1){
    	
    		if (navigator.userAgent.indexOf("Chrome") === -1){
    	
    			webkit = "safari";
    		} else {
    	
    			webkit = "chrome";
    		}
    	}
    	$("html").addClass(browser);
    	if (browser === "webkit") {
    	
    		$("html").addClass(webkit);
    	}
    	$("html").addClass("touch" + touch);
    	
    	////////////////////////////////////////////////
    	// JS SPECIFIC LAYOUT ADJ
    	function forwidth(){
    		var winH 	= 	".winH{ min-height:" + $(window).height() + "px;}" +
    						".moz .winH{ height:" + $(window).height() + "px;}";
    		var winHalf = 	".winHalf{ top:" + ($(window).height()/2) + "px;}";
    		var winH90 	= 	".winH90{ min-height:" + ($(window).height()*0.9) + "px;}" +
    						".moz .winH90{ height:" + $(window).height() + "px;}";
    		// var stickey = ".stuck{left:"+ $(".sticky").offset().left +"px;}"
    		// var styling = "<style> .progressBar{margin-top:-"+ $(".progressBar").height()/2 +"px;} .winH{ height:"+ $(window).height() +"px;}</style>"
    		var styling = "<style>" + winH + winHalf + winH90 + "</style>";
    		$(".jsdump").html(styling);
    	}
    	forwidth();
    	
    	
    	///////////////////////////////////
    	// Hash Scrolling 
    	
    	var scrollSpeed = 300;
    	
    	// Page opens with a hash
    	function hashScroll(){
    	
    		    	
    		if (window.location.hash !== "") {
    	
    			$("html, body").animate({
    	
    				scrollTop: ( $(window.location.hash).offset().top - navPadding )
    			}, scrollSpeed);
    		}
    	}
    	
    	// link is clicked with a hash
    	$("a[href*=#]:not([href=#])").click(function() {
    	
    	    if (location.pathname.replace(/^\//,"") === this.pathname.replace(/^\//,"") && location.hostname === this.hostname) {
    	
    		    var target = $(this.hash);
    		    target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
    		    if (target.length) {
    	
    		        $("html, body").animate({
    	
    		        	scrollTop: (target.offset().top - navPadding )
    		        }, scrollSpeed);
    		        return false;
    		    }
    	    }
    	});
    	
    	
    	
    	//////////////////////////////////////////////////////
    	// Add page to html class
    	
    	$("html").addClass("page-"+$("#primary").attr("page"));	
    	
    	///////////////////////////////////
    	// Activate tabs
    	if ($(".tabs").length > 0) {
    	
    		(".tabs").tab();
    		$(function(){
    	
    		  	var hash = window.location.hash;
    		  	$("ul.nav a[href='" + hash + "']").tab("show");
    	
    		  	$(".nav-tabs a").click(function (e) {
    	
    				$(this).tab("show");
    				var scrollmem = $("body").scrollTop();
    				window.location.hash = this.hash;
    				$("html, body").scrollTop(scrollmem);
    		  	});
    		});
    	}
    	
    	
    	$(".mobile-nav .menu-toggle").click(function(){
    	
    		$(".mobile-nav").toggleClass('active');
    	});
    	
    	
    	$('html').addClass('document-loaded');
    	
    	$(window).load(function() {
    	
    		$('html').addClass('page-loaded');	    	
    	
    	///////////////////////////////////
    		// Hash Scroll
    		hashScroll();
    		setTimeout(function() {console.log("%c•ᴗ•", "color: rgb(209, 169, 104); font-size: 50pt"); }, 1000);
    	
    	});
    	
    	    	// $(".info-button .the-button").click(function(){
    	
    	// 	$(".info-reveal").toggleClass('show');
    	// 	event.stopPropagation();
    	// });
    	
    	// var dblClickCount = 1;
    	
    	// $("html").dblclick(function(){
    	
    	//     dblClickCount = dblClickCount + 1;        	
    	//     if (dblClickCount >= 5) {
    	//     	dblClickCount = 1;
    	//     }
    	// 	$("body").attr('background-angle', dblClickCount);
    	// 	if (dblClickCount === 1) {
    	// 		$("body").removeClass('background-on');
    	// 	} else {
    	// 		$("body").addClass('background-on');
    	// 	}
    	// });
    	
    	var clickCount = 0;
    	// $('li').each(function(){
    	//     this.onclick = function() {
    	//     	console.log('bingo');
    	//     }
    	// });
    	
    	$("body").click(function(){
    		
    		console.log('bingo');
    		    	
    	    clickCount++;
    	    if (clickCount > 4) {
    	    	clickCount = 0;
    	    }
    		$("body").attr('background-slide', clickCount);
    	});
		
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