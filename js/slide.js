
$(document).ready(function(){
	
	
	
	$('.left').click(function(){
		var leftMove = '-'+move;
		var lastContent = $('.slideImg:last-child').html();
		//$('.slideImg').css({'margin-left': margin});
		var newDiv = '<div class="slideImg" style="margin-left:'+leftMove+'">'+lastContent+'</div>';
		$('.slideImg:first-child').animate({marginLeft:margin});
		$('.slideImg:last-child').remove();
		//$('.slide').css({left: '0px'});	
		$('.slide').prepend(newDiv);
	});
	$('.right').click(function(){
		var rightMove = '-'+move;
		var firstContent = $('.slideImg:first-child').html();
		//$('.slideImg').css({'margin-left': margin});
		var newDiv = '<div class="slideImg" style="margin-left:'+margin+'">'+firstContent+'</div>';
		negativeMargin = '-' + margin;
		doubleMove = -(move*2);
		$('.slideImg:first-child').animate({marginLeft:doubleMove});
		$('.slideImg:nth-child(2)').animate({marginLeft:rightMove});
		$('.slideImg:first-child').remove();
		//$('.slide').css({left: '0px'});	
		$('.slide').append(newDiv);
	
	});
	$('.slide').delegate('.topInfo2', 'hover', function(event) {
		if( event.type === 'mouseenter' ) {
			
			var bubbleTrigger = $(this).find('.bubbleTrigger');
			var content = $(bubbleTrigger).parent();
			var topInfo = $(content).parent();
			var bubbleImg = $(topInfo).find('img');
			$(topInfo).stop(true).animate({marginTop: '163px'},100);
			$(topInfo).find('h4').animate({'top' : '20px'});
			$(content).animate({top: '55px'},200,function(){
				$(topInfo).find('.bubbleTitle').animate({opacity: '0'},200);
				$(topInfo).find('h4').css({color: '#F8CF29'});
				$(topInfo).find('.bubbleTrigger').animate({'marginTop' : '10px'},200);
				
					
			});
			$(bubbleImg).stop(true).delay(200).animate({opacity: '1'},200);
		}
		else{
			var bubbleTrigger = $(this).find('.bubbleTrigger');
			var bgImg = $(this).find('.hoverCircle');
			var content = $(bubbleTrigger).parent();
			var topInfo = $(content).parent();
			
			$(bgImg).animate({opacity: '0'},400,function(){
				$(topInfo).animate({marginTop: '183px'},100);
			$(topInfo).find('h4').animate({'top' : '0'},20);
				$(content).animate({top: '110px'},200);
				$(topInfo).find('.bubbleTitle').animate({opacity: '1'},200);
				$(topInfo).find('h4').css({color: '#FFFFFF'});
				$(topInfo).find('.bubbleTrigger').animate({'marginTop' : '20px'},200);
				var bubbleImg = $(topInfo).find('img');
				
			});
			
		}
	});
	
	$('.slide').delegate('.topInfo','click' ,function(){
		$('.topInfo').removeClass('topInfo2');
		 var x = $(this).find('.bubbleContent').find('img');
		var contentRel = $(x).attr('id');
		var content2 = contentRel.replace('s','');
		var contentId = '#a'+content2;
		var bubbleContent = $(this).find('.bubbleContent');
		var topInfo = $(bubbleContent).parent();
		var parent = $(this);
		var container = $(parent).parent();
		var what = $(parent).html();
		var floatUp = $(parent).parent();
		//alert($(container).html());
		var secondCircle = $(floatUp).find('.hoverCircle2')
		$('.slideImg img:last-child').css({opacity: '.25'});
		$(container).find('.smallImg').css({opacity: '1'});
		$(parent).animate({top: '-415px'},function(){
			$('.bioDrop').animate({height: '392px'},function(){
				$('.bioDrop .closeBtn').animate({opacity: '1'});
				$('.topInfo').animate({top: '-415px'});
				
			});
			$(contentId).css({height: 'auto'});
			setTimeout( function(){
      		$(secondCircle).animate({top:'185px'});
   		},200);
			setTimeout(function(){
			$(contentId).animate({opacity: '1'});
			},600);
			$('.left').animate({opacity: '0'});
			$('.right').animate({opacity: '0'});
			
		});
		
		
	});
	$('.bioDrop .closeBtn').click(function(){
		$('.bubbleContent').animate({top: '110px'},200);
				$('.bubbleTitle').animate({opacity: '1'},200);
				$('.topInfo').find('h4').css({color: '#FFFFFF'});
				$('.topInfo').find('h4').css({top: '0px'});
				$('.topInfo').animate({marginTop: '183px'});
				$('.bubbleTrigger').animate({'marginTop' : '20px'},200);
		$('.hoverCircle').css({opacity: '0'});
		$(this).animate({opacity:'0'});
		$('.bubbleTrigger img').css({opacity: '1'});
		$('.bio').animate({opacity:'0'},function(){
			$(this).css({height: '0'});
			$('.hoverCircle2').animate({top: '-230px'});
			$('.bioDrop').animate({height: '0'});
			$('.smallImg').stop(true).animate({opacity: '1'});
			$('.left').animate({opacity: '1'});
			$('.right').animate({opacity: '1'});
			$('.topInfo').animate({top: '0'},function(){$('.topInfo').addClass('topInfo2');});
		});
	});
	
});