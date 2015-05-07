// JavaScript Document
$(document).ready(function(){
		
		$('.scroll-content').delegate('.tempDown','click', function(){
		var ulHeight = $('.mask ul').height();
		rowNumbers = ulHeight/ 245;
		$('.tempDown').removeAttr('rel');
		$('.tempDown').attr('rel',rowNumbers);
		$(this).removeClass('tempDown');
		$('.up').addClass('tempUp');
		return rowNumbers;
		});
		$('.scroll-content').delegate('.down','click', function(){
		rowNumbers;
		var current = $(this).attr('rel');
		//alert(rowNumbers);
		if (current > 2){
		var remaining = current -1;
		var upRemaining = rowNumbers - remaining;
		if (current <= 0){
			$('.down').attr('rel',0);
			$('.up').attr('rel',rowNumbers);
		} else {
			$('.down').attr('rel',remaining);
			$('.up').attr('rel',upRemaining);
		}
		var slidesLeft = current - 2;
		if (slidesLeft > 0){
			$('.mask ul').animate({top: '-=245px'});
			$('.up2').animate({opacity: '1'});
		}}
		});
		$('.scroll-content').delegate('.up','click', function(){
		rowNumbers;
		currentUp = $(this).attr('rel');
		var remaining = currentUp -1;
		var upRemaining = rowNumbers - remaining;
		if (currentUp <= 0){
			$('.up').attr('rel',0);
			$('.down').attr('rel',rowNumbers);
		} else {
			$('.up').attr('rel',remaining);
			$('.down').attr('rel',upRemaining);
		}
		var slidesLeft = currentUp;
		if (slidesLeft > 0){
			$('.mask ul').animate({top: '+=245px'});
			$('.down2').animate({opacity: '1'});
		};
		
		});
		
		
		

});

