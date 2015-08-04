(function($){

		var evenOrOdd = Math.floor(Math.random()*(2-1+1)+1);

    $.directorselector = function(el){

        var base = this;
        
        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;
        
        // Add a reverse reference to the DOM object
        base.$el.data("directorselector", base);
        
        base.init = function(){
            // Put your initialization code here
        };
        
        // Run initializer
        base.init();
    };
	
	var caro;
	

    
    
    $.fn.directorselector = function(){
        return this.each(function(){
        
		var it = 0;			
		var movies = [];
		
		var left = 0;
		var width = $(".panel").width();
		$("#pageSlider1").css({
			marginLeft: 0 + "px"
		});
		$("#pageSlider2").css({
			marginLeft: '100%'
		});
		$("#pageSlider3").css({
			marginLeft: '200%'
		});
		
		//$("#page2").css({
			//width: width + "px"
		//});
		
		$("#facePanel").css({
			left: (2 * width - 650) + "px"
		});
		
		
		$("#previewGoBack").click(
			function(){
				setTimeout( function(){
      				$("#facePanel img").hide();
					$("#vidFrame").fadeOut().attr('src','');
					$('.middleFade').animate({opacity:'0'});
    			},500);
				
				
				
				
				var left = 0;
			
				$("#pageSlider1").animate({
					marginLeft: '0px'
				});
				$("#pageSlider2").animate({
					marginLeft: "100%"
				});
				$("#pageSlider3").animate({
					marginLeft: "200%"
				});
				
				$("#facePanel").animate({
					left: left + +(2 * width -650) + "px"
				});
			
			}
		);

		$("#previewGoNext").click(
			function(){
				
				var left = 0;
				
				var width = $(".panel").width();
				left -= 2*width;
				if (left < -2 * width) {
					left = 0;
				}
			
				$("#pageSlider1").animate({
					marginLeft: '-200%'
				});
				$("#pageSlider2").animate({
					marginLeft: '-100%'
				});
				$("#pageSlider3").animate({
					marginLeft: '0px'
				});
				
				$("#facePanel").animate({
					left: left + +(2 * width -200) + "px"
				},function(){$('#facePanel').animate({opacity: '1'});});
				
				var iframe = $('#vidFrame')[0];
				var player = $f(iframe);
    			player.api('pause');
			}
			
		);

		$("#bioGoBack").click(
			function(){
				
				
				var left = 0;
				
				var width = $(".panel").width();
				left -= width;
				if (left < -2 * width) {
					left = 0;
				}
				
				$("#pageSlider1").animate({
					marginLeft: '-100%'
				});
				$("#pageSlider2").animate({
					marginLeft: '0px'
				});
				$("#pageSlider3").animate({
					marginLeft: '100%'
				});
				
				$("#facePanel").animate({
				left: left + +(2 * width -650) + "px"
				},function(){$('#facePanel').animate({opacity: '0.2'});});
				
			}
		);

		$.getJSON('directordata.json', function(data) {
			
			$.each(data.directorsArray, function(key, val) {
	
				var cacheImage = document.createElement('img');
				cacheImage.src = val.directorHeadshot;
	
				if(val.directorName !== 'Landing Page') {

					$('#directorNav li ul').append(
					$('<li>').append(
								$('<a>').attr('href','#').addClass("dir_"+it).addClass("classy2").click(
									function(event){
										event.preventDefault();
										var classes = $(this).attr('class').split(" ");
										for ( var i = 0, l = classes.length; i<l; ++i ) {
											if (classes[i].substring(0,4) == "dir_"){
												var arrayLoc = classes[i].split("_");
												$.fn.directorselector.loadDirectorVids(arrayLoc[1]);
												
											}
											var ulHeight = $('.mask ul').height();
												rowNumbers = ulHeight/ 320;
												$('.down').addClass('tempDown');
												$('.tempDown').attr('rel',rowNumbers);
												$('.up').attr('rel', '0');
												setTimeout( function(){
	      											$('.mask ul').css({top: '0'});
	   											},600);
												
												return rowNumbers;
										}
											
										return false;
									}
								).html("<label class='directorListName'><span>" + val.directorName + "</span></label>" )));

				}

				it++;

				var movit = 0;

					$.each(val.directorVids, function(key1, val1) {
						
						// If landing page, only show the 'even' videos if
						// the evenOrOdd variable is set to even and vice versa
						if(val.directorName == 'Landing Page' && (evenOrOdd == 1 && !isOdd(val1.vidPageOrder)) || (evenOrOdd == 2 && isOdd(val1.vidPageOrder))) {
							movit++; return;
						}

						var hideInAll = '<li>';
						if(val1.hideInAll) {
							var hideInAll = '<li class="hideinall">';
						}

						if(typeof val1.directorName !== "undefined"){
							var director = val1.directorName;
						} else {
							var director = val.directorName;
						}
	                                       
	                                       movies.push({'key': val1.vidPageOrder, 'value': hideInAll + '<div class="hoverEffect" id="mov_' + it + "_" + movit + '"><div class="hoverTitle">'+val1.vidTitle+'</div><span>'+ director + '</span></div><img class="vidPromoImg" src="'+val1.vidPromoImage+'" /></li>'});

						movit++;

			});
				
			});
			
			//movies.sort(function(a,b) { return parseFloat(a.key) - parseFloat(b.key) } );

			// Randomly sort the first 8, then display the rest in order.
			var landingPage = shuffle(movies.slice(-8));
			movies          = $.merge(landingPage.slice(-8), shuffle(movies.slice(0, movies.length - 8)));
			var movieList = [];	
			 $.each(movies, function(c, d) {
                               movieList.push(d.value);
                       });
					   $('#directorNav li ul').append($('<li>').append( $('<a>').attr('href','#').addClass("showAllDirs").addClass("classy2").click(function(){ $.fn.directorselector.loadAllVids(); return false; }).html("View All Work") ));

			$('<ul/>', { html: movieList.join('')}).appendTo('#director-carousel');
			
			$('#director-carousel').append('<div class="upDown"><div class="down tempDown" rel="0"><div class="down2"><img src="images/down.gif"/></div></div><div class="up" rel="0"><div class="up2"><img src="images/up.gif"/></div></div></div><div class="vimeoLink"><a href="http://vimeopro.com/tellcollective/tell-collective-portfolio" target="_blank"><img src="images/vimeo2.gif" class="hover"></a></div>');
			
				caro = $('#director-carousel');
				
				
			
			
				caro.carousel({
				itemsPerPage: 4,
				itemsPerTransition: 4,
				easing: 'linear',
				noOfRows: 2,
				nextPrevLinks: false
			});
	
			
	
			$('.hoverEffect').click( function() { 
				
				$.fn.directorselector.loadVidVals($(this).attr('id'));

				if($(this).attr('id').indexOf('mov_1') == 0 ) {
					$('body').attr('class', 'corporate-work');
				} else {
					$('body').removeAttr('class');
				}
			
				$("#vidFrame").hide();
				var left = 0;
				var width = $(".panel").width();
				left -= width;
				if (left < -2 * width) {
					left = 0;
				}
				$("#pageSlider1").animate({
					marginLeft: '-100%'
				});
				$("#pageSlider2").animate({
					marginLeft: '0px'
				});
				$("#pageSlider3").animate({
					marginLeft: '100%'
				});
			
				$("#facePanel").animate({
					left: left + +(2 * width -650) + "px"
				},function(){$('.middleFade').animate({opacity:'1'});});
			
			
			});
			
		});			
    
        });
       
    };
    
	
	
	$.fn.directorselector.loadVidVals = function(arrayLoc){
		
		arrayLoc = arrayLoc.split('_');
		var it = 0;
		
		$.getJSON('directordata.json', function(data) {
		
			$.each(data.directorsArray, function(key, val) {
	
				if (it == (parseInt(arrayLoc[1]) - 1)){
				
					$("#previewSubTitle").text(val.directorName).hide().delay(300).fadeIn(400);
					$("#bioPersonTitle").text(val.directorTitle);
					$("#bioPersonName").text(val.directorName);
					$("#bioContent").html(val.directorBio);
					$("#facePanel img").attr('src', val.directorHeadshot).hide().delay(300).fadeIn(400);
				
					var movit = 0;
					$.each(val.directorVids, function(key1, val1) {
					
					if (movit == arrayLoc[2]){
						
						$("#previewTitle").text(val1.vidTitle.replace('<br />', ' ')).hide().delay(200).fadeIn(200);
						
						$("#vidFrame").attr('src', val1.vidVimeoLink + "?api=1").fadeIn(200);
						
						
						var iframe = $('#vidFrame')[0],
							player = $f(iframe);

						// When the player is ready, add listeners for pause, finish, and playProgress
						player.addEvent('ready', function() {
							
							$("#vidFrame").hide().delay(300).fadeIn(300);
						});

						$("#previewAboutTitle").hide().delay(300).fadeIn(400);
						$("#previewAboutCotent").html(val1.vidAbout).hide().delay(300).fadeIn(400);
					}
					
					movit++;
				  	});
				}  
				it++;
				
			});
		
		});	
		
	}
	
	
	
    $.fn.directorselector.loadDirectorVids = function(arrayLoc){
 
			var it = 0;
			$.getJSON('directordata.json', function(data) {
				$.each(data.directorsArray, function(key, val) {
					if (it == arrayLoc){
					
						$('.selectedDirector').text(val.directorName);
					}  
					it++;
				});
			});
 
    	$('#director-carousel').fadeOut( 600, function(){
    	caro.data('carousel').returnToFirstPage();
    	
    	var movies = [];
		
			$('.mask li').each(function(index) {
			
				var obj = $('.mask li .hoverEffect')[index];
				
				if ($(obj).attr("id").split("_")[1] != (parseInt(arrayLoc) + 1))
				{
					$(this).css("display","none");
				}
				else
				{
					$(this).css("display","block");
				}
				
			});
		
		//$('.pagination-links').hide();
		}).delay(300).fadeIn(500);
    	$('.selectedDirector').fadeIn(500);
    	

    	
    } 
    
    $.fn.directorselector.loadAllVids = function(){

		$('.selectedDirector').fadeOut(500);
	
    	$('#director-carousel').fadeOut( 600, function(){
    	
    	var it = 0;
    	var movies = [];
		
		
		$('.mask li').each(function(index) {

				if(!$(this).hasClass('hideinall')) {
					$(this).css("display","block");
				} else {
					$(this).css("display","none");
				}
				
		});
		
		//$('.pagination-links').show();
		}).delay(300).fadeIn(500);    	
    	
    }

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex ;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    } 

    function isOdd(num) { return num % 2;}
    
})(jQuery);