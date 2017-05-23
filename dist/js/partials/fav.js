
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
  favicon.image(image);
}, 300);
