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