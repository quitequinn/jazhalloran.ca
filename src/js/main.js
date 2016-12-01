
////////////////////////////////////////////////
/////////                             //////////
/////////     Re-Usable Var/Funct     //////////
/////////                             //////////
////////////////////////////////////////////////

////////////////////////////////////////////////
/// GLOBAL
var root = location.protocol + "//" + location.host;

var date = new Date();
var day = date.getDate();
var monthIndex = date.getMonth();
var year = date.getFullYear();
var hours = date.getHours();
var ampm = hours >= 12 ? 'pm' : 'am';

////////////////////////////////////////////////
/// IF MOBILE
function isMobile() {
	if ( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/IEMobile/i)) {
		return true; } else { return false; }
}
function iphone() {
	if ( navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
		return true; } else { return false; }
}
var isTouchDevice = 'ontouchstart' in document.documentElement;

////////////////////////////////////////////////
/// GET VENDOR PREFIXES
var webkit, touch;
var prefix = ( function() {
	var styles = window.getComputedStyle(document.documentElement, ''),
		pre = (Array.prototype.slice
			.call(styles)
			.join('')
			.match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
		)[1],
		dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
	return {
		dom: dom,
		lowercase: pre,
		css: '-' + pre + '-',
		js: pre[0].toUpperCase() + pre.substr(1)
	};
})();

function slugify(text){
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

////////////////////////////////////////////////
/// CHECK FOR TOUCH
if ( isTouchDevice ) {
	touch = true;
} else {
	touch = false;
}
if ( navigator.userAgent.indexOf('Safari') != -1) {
	if ( navigator.userAgent.indexOf('Chrome') == -1) {
		webkit = 'safari';
	} else {
		webkit = 'chrome';
	}
}
$("html").addClass(prefix.lowercase)
if ( prefix.lowercase == "webkit" ) {
	$("html").addClass(webkit)
};
$("html").addClass("touch" + touch)


////////////////////////////////////////////////
//Get integer between
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

////////////////////////////////////////////////
/// JS SPECIFIC STYLING
function forwidth() {
	var winH = '.winH{ min-height:'+ $(window).height() +'px;}';
	var winHalf = '.winHalf{ top:'+ ($(window).height()/2) +'px;}';
	var winH90 = '.winH90{ min-height:'+ ($(window).height()*0.9) +'px;}';
	var mozwinH = '.moz .winH{ height:'+ $(window).height() +'px;}';
	var mozwinH90 = '.moz .winH90{ height:'+ ($(window).height()*0.9) +'px;}';
	var styling = '<style>'+winH+winHalf+winH90+mozwinH+mozwinH90+'</style>'
	$('.jsdump').html(styling);
}
forwidth();


$(document).ready( function() {



////////////////////////////////////////////////
/////////                             //////////
/////////    Often Used Functions     //////////
/////////                             //////////
////////////////////////////////////////////////

	
////////////////////////////////////////////////
// Smart quoates http://smartquotesjs.com/
	smartquotes();

////////////////////////////////////////////////
/// Fix Widows
	function wFix(obj) {
		$(obj).widowFix({
			prevLimit: 10,
			linkFix: true
		});
	}
	wFix("p");

////////////////////////////////////////////////
/// Validate Email
	function validateEmail(email) {
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		return re.test(email);
	}
	if ( $(".newsletter").length > 0 ) {
		$(".newsletter input[type='text']").keyup( function() {
			if ( $(this).val() == "" ) {
				$(".newsletter").removeClass("invalid");
				$(".newsletter").removeClass("valid");
			} else {
				if ( validateEmail($(this).val()) ) {
					$(".newsletter").removeClass("invalid");
					$(".newsletter").addClass("valid");
				} else {
					$(".newsletter").removeClass("valid");
					$(".newsletter").addClass("invalid");
				}
			}
		});
	}

////////////////////////////////////////////////
/// Activate tabs
	if ( $(".tabs").length > 0 ) {
		$('.tabs').tab();

		$( function() {
			var hash = window.location.hash;
			hash && $('ul.nav a[href="' + hash + '"]').tab('show');

			$('.nav-tabs a').click( function(e) {
				$(this).tab('show');
				var scrollmem = $('body').scrollTop();
				window.location.hash = this.hash;
				$('html,body').scrollTop(scrollmem);
			});
		});
	}

////////////////////////////////////////////////
/// Hashtag anchor
	function tabAnchor(hash) {
		$('html, body').animate({
			scrollTop: ($(hash).offset().top - 100)
		}, 300, function() {
			window.location.hash = hash;
		});
	}
	if ( $(".hashAnchor").length > 0 ) {
		$(".hashAnchor").on('click', function(e) {
			e.preventDefault();
			var hash = this.hash;
			tabAnchor(hash);
		});
	}


////////////////////////////////////////////////
////////////////                 ///////////////
////////////////    LISTENERS    ///////////////
////////////////                 ///////////////
////////////////////////////////////////////////

////////////////////////////////////////////////
///	ON RESIZE
	var updateLayout = _.debounce( function(e) {

	}, 500);
	window.addEventListener("resize", updateLayout, false);

////////////////////////////////////////////////
///	ON scroll throttle
	var scroll = _.throttle( function(e) {	

	}, 500);
	window.addEventListener("scroll", scroll, false);


	$(window).load( function() {
		//setTimeout( function() {  }, 500);

		$(".loader").addClass('loaded');
		setTimeout( function() { $(".loader").remove(); }, 3000);
	});

});