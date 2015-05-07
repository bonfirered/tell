
$(document).ready(function(){
	var view = $( window );
	view.bind(
			"scroll position",
			function(){
			var viewTop = view.scrollTop();
			var firstChange = ($('.moreOverlay').offset().top)-500;
			var secondChange = ($('#page3').offset().top-150);
			if ((viewTop < firstChange)){
				$('.scrollUp img').css({opacity:'1'});	
					$('.scrollDown img').css({opacity:'1'});
			}
			else if (
				(viewTop >= firstChange && viewTop < secondChange) 
				){
					$('.scrollUp img').css({opacity:'0'});	
					$('.scrollDown img').css({opacity:'0'});
				} else {
				$('.scrollUp img').css({opacity:'1'});	
					$('.scrollDown img').css({opacity:'1'});
				 
				} 
			});
			
			
			$('.scrollUp').click(function(){
				var viewTop = view.scrollTop();
			var firstChange = ($('.moreOverlay').offset().top)-500;
			var secondChange = ($('#page3').offset().top-150);
			var middleChange = ($('#bioSect').offset().top-150);
			if ((viewTop < 930)){
				$('html,body').animate({scrollTop:(0)}, 500);
			}
			else if (
				(viewTop >= 930 && viewTop < 1900) 
				){
					$('html,body').animate({scrollTop:(725)}, 500);
				} else if (
				(viewTop >= 1900 && viewTop < 2570) 
				){
					$('html,body').animate({scrollTop:(1700)}, 500);
				}
				else {
					$('html,body').animate({scrollTop:(2360)}, 500);				 
				} 
				
			});
			$('.scrollDown').click(function(){
				var viewTop = view.scrollTop();
			var firstChange = ($('.moreOverlay').offset().top)-500;
			var secondChange = ($('#page3').offset().top-150);
			var middleChange = ($('#bioSect').offset().top-150);
			if ((viewTop < 725)){
				$('html,body').animate({scrollTop:(725)}, 500);
			}
			else if (
				(viewTop >= 725 && viewTop < 1700) 
				){
					$('html,body').animate({scrollTop:(1700)}, 500);
				} else if (
				(viewTop >= 1700 && viewTop < 2360) 
				){
					$('html,body').animate({scrollTop:(2360)}, 500);
				}
				else {
					$('html,body').animate({scrollTop:(3145)}, 500);				 
				} 
				
			});
			
	(function() {        
    	var timer;
    	$(window).bind('scroll',function () {
			clearTimeout(timer);
			timer = setTimeout( refresh , 2000 );
			if ($('.upDown2').hasClass('opacity')){
				$('.upDown2').stop(true).animate({opacity: '1'});
				$('.upDown2').removeClass('opacity');
			}
		});
   		var refresh = function () { 
        // do stuff
		$('.upDown2').addClass('opacity');
       $('.upDown2').stop(true).animate({opacity: '0.1'});
		
		
    };
})();
$('.upDown2').mouseover(function(){$(this).animate({opacity: '1'})});				
});
