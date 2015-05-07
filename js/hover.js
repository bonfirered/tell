// JavaScript Document
$(document).ready(function(){
	$('.leftMailerBox').hover(function(){
			var image = $(this).find('.mailerBoxText');
			$(image).stop(true).animate({left:'15px'},200);
			var image2 = $(this).find('img');
			$(image2).stop(true).animate({opacity: '0'});
		},function(){
			var image = $(this).find('.mailerBoxText');
			$(image).stop(true).animate({left:'0px'},200);
			var image2 = $(this).find('img');
			$(image2).stop(true).animate({opacity: '1'});	
		});
		$('.rightMailerBox').hover(function(){
			var image = $(this).find('.mailerBoxText');
			$(image).stop(true).animate({left:'15px'},200);
			var image2 = $(this).find('img');
			$(image2).stop(true).animate({opacity: '0'});
		},function(){
			var image = $(this).find('.mailerBoxText');
			$(image).stop(true).animate({left:'0px'},200);
			var image2 = $(this).find('img');
			$(image2).stop(true).animate({opacity: '1'});	
		});
		$('.FBLink2 a').hover(function(){
			var image = $(this).find('img');
			$(image).stop(true).animate({opacity:'0'});
		},function(){
			var image = $(this).find('img');
			$(image).stop(true).animate({opacity:'1'});	
		});
	$('.bubbleTrigger').hover(function(){
			var image = $(this).find('img');
			$(image).stop(true).animate({opacity:'0'});
		},function(){
			var image = $(this).find('img');
			$(image).stop(true).animate({opacity:'1'});	
		});
	$('.left').hover(function(){
			var image = $(this).find('img');
			$(image).stop(true).animate({opacity:'0'});
		},function(){
			var image = $(this).find('img');
			$(image).stop(true).animate({opacity:'1'});	
		});
		$('.right').hover(function(){
			var image = $(this).find('img');
			$(image).stop(true).animate({opacity:'0'});
		},function(){
			var image = $(this).find('img');
			$(image).stop(true).animate({opacity:'1'});	
		});
	$('.viewWork').hover(function(){
			var image = $(this).find('img');
			$(image).stop(true).animate({opacity:'0'});
		},function(){
			var image = $(this).find('img');
			$(image).stop(true).animate({opacity:'1'});	
		});
	$('.socialLinks a').hover(function(){
			var image = $(this).find('img');
			$(image).stop(true).animate({opacity:'0'});
		},function(){
			var image = $(this).find('img');
			$(image).stop(true).animate({opacity:'1'});	
		});
	$('.scroll-content').delegate(' #director-carousel li', 'hover', function(event) {
		var selected = $(this).find('.hoverEffect');
		if( event.type === 'mouseenter' )  
        $(selected).stop(true).animate({opacity: '1'});
    else
        $(selected).stop(true).animate({opacity: '0'});
	}); 
	$('.showAllDirs').click(function(event) {
		$.fn.directorselector.loadAllVids();
		event.preventDefault();$('.down').addClass('tempDown');var 			
		ulHeight = $('.mask ul').height();
		rowNumbers = ulHeight/ 245;
		$('.down').addClass('tempDown');
		$('.tempDown').attr('rel',rowNumbers);
		setTimeout( function(){
      		$('.mask ul').css({top: '0'});
   		},600);
		return rowNumbers; return false; 
		
	}); 
	$('.moreInfo').click(function(){
		$('.moreOverlay .content').animate({top: '0'});
		$('.moreOverlay').animate({height: '972px'}, function() {
			$('.moreOverlay .closeBtn').animate({opacity: '1'});
			$('.moreOverlay .content').animate({opacity: '1'});
		});
	});
	$('.moreOverlay .closeBtn').click(function(){
		$('.moreOverlay .content').animate({opacity: '0'});
		$('.moreOverlay .content').animate({top: '-2000px'});
		$(this).animate({opacity: '0'}, function() {
			$('.moreOverlay').animate({height: '0'});
		});
	});
	$('.viewWork').click(function(){
		$('.moreOverlay .content').animate({opacity: '0'});
		$('.moreOverlay .content').animate({top: '-2000px'});
		$('.closeBtn').animate({opacity: '0'}, function() {
			$('.moreOverlay').animate({height: '0'});
			
		});
	});
	
	$('.directorSortBox').hover(function(){
		$('.directorSortBox img').animate({opacity: '0'}, function(){
			$('.directorSortBox ul').css({'border-top' : '1px solid #4D4E4A'});
			});
			setTimeout( function(){
      			$('.directorSortBox ul').stop(true).animate({height: '245px'});
   			},300);
		
	}, function(){
		$('.directorSortBox ul').animate({height: '0'},function(){
			$('.directorSortBox ul').css({'border-top' : 'none'});
			$('.directorSortBox img').animate({opacity: '1'});
			});
		
		});
		$('.moreInfo').hover(function(){
			$('.moreInfo img').stop(true).animate({opacity: '0'});
		}, function(){
			$('.moreInfo img').stop(true).animate({opacity: '1'});
		});
		$('#page2').delegate(' .up2', 'hover', function(event) {
			if( event.type === 'mouseenter' )  
			$('.up2 img').stop(true).animate({opacity: '0'});
		else
			$('.up2 img').stop(true).animate({opacity: '1'});
		}); 
		
		$('#page2').delegate(' .down2', 'hover', function(event) {
			if( event.type === 'mouseenter' )  
			$('.down2 img').stop(true).animate({opacity: '0'});
		else
			$('.down2 img').stop(true).animate({opacity: '1'});
		});
		
		
		$('.hover').hover(function(){
			$(this).stop(true).animate({opacity: '0'});
		},function(){
			$(this).stop(true).animate({opacity: '1'});
		}); 
		
		$('.scroll-content').delegate(' .hover', 'hover', function(event) {
			if( event.type === 'mouseenter' )  
			$(this).stop(true).animate({opacity: '0'});
		else
			$(this).stop(true).animate({opacity: '1'});
		}); 
});