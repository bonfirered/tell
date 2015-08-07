// JavaScript Document
$(function() {
		$(document).ready(function(){
    //$("div.slide").randomize("div.slideImg");
	sizeGrow();	  
  });
});
(function($) {

$.fn.randomize = function(childElem) {
  return this.each(function() {
      var $this = $(this);
      var elems = $this.children(childElem);

      elems.sort(function() { return (Math.round(Math.random())-0.5); });  

      $this.remove(childElem);  

      for(var i=0; i < elems.length; i++)
        $this.append(elems[i]);      

  });    
}
})(jQuery);
function sizeGrow(){
	var htmlWidth = $(this).width();
	if(htmlWidth >= 1680){
		$('#pageSlider1 .scroll-content').css({width: '1470px'});
		$('.bottom .container').css({width: '1500px'});
		$('.slideImg').css({'margin-left': '10px'});
		$('.slide').css({left: '-299px'});
		$('.slideImg:first-child').css({'margin-left' : '-299px'});
		move = '299px';
		margin = '10px';
	}
	else if(htmlWidth < 1680 && htmlWidth >= 1500){
		$('#pageSlider1 .scroll-content').css({width: '1225px'});
		$('.bottom .container').css({width: '1230px'});
		$('.slideImg').css({'margin-left': '15px'});
		$('.left').css({display: 'inherit', 'margin-left' : '100px'});
		$('.right').css({display: 'inherit', 'margin-right' : '100px'});
		$('.slide').css({left: '-304px'});
		$('.slideImg:first-child').css({'margin-left' : '-304px'});
		move = '304px';
		margin = '15px';
	}
	else {
		$('#pageSlider1 .scroll-content').css({width: '980px'});
		$('.bottom .container').css({width: '1005px'});
		$('.slideImg').css({'margin-left': '35px'});
		$('.left').css({display: 'inherit', 'margin-left' : '65px'});
		$('.right').css({display: 'inherit', 'margin-right' : '65px'});
		$('.slide').css({left: '-324px'});
		$('.slideImg:first-child').css({'margin-left' : '-324px'});
		 move = '324px';
		 margin = '35px';
		 
	};
	if(htmlWidth = 1680){
		$('.down').addClass('tempDown');
	var ulHeight = $('.mask ul').height();
	rowNumbers = ulHeight/ 245;
	$('.down').addClass('tempDown');
	$('.tempDown').attr('rel',rowNumbers);
	$('.mask ul').css({top: '0'});
	}
	else if(htmlWidth = 1500){
		$('.down').addClass('tempDown');
	var ulHeight = $('.mask ul').height();
	rowNumbers = ulHeight/ 245;
	$('.down').addClass('tempDown');
	$('.tempDown').attr('rel',rowNumbers);
	$('.mask ul').css({top: '0'});
	}
	else {
		$('#pageSlider1 .scroll-content').css({width: '980px'});
	};
	
	
	//else if(htmlWidth >= 1200){
		//$('.scroll-content').css({width: '1225px'});
	//}
};

$(window).resize(function(){
	sizeGrow();
});

$(document).ready(function(){
	
	$('#pageSlider1 .scroll-content').delegate('window', 'load', function() {
$('.mask ul').each(function(){
            // get current ul
            var $ul = $(this);
            // get array of list items in current ul
            var $liArr = $ul.children('li');
            // sort array of list items in current ul randomly
            $liArr.sort(function(a,b){
                  // Get a random number between 0 and 10
                  var temp = parseInt( Math.random()*10 );
                  // Get 1 or 0, whether temp is odd or even
                  var isOddOrEven = temp%2;
                  // Get +1 or -1, whether temp greater or smaller than 5
                  var isPosOrNeg = temp>5 ? 1 : -1;
                  // Return -1, 0, or +1
                  return( isOddOrEven*isPosOrNeg );
            })
            // append list items to ul
            .appendTo($ul);            
      });
});
});

