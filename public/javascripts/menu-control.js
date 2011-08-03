var whichPic = 1;
var currentPage = "#page0"
var bg_1_pic = "bg_1.jpg"
var bg_2_pic = "bg_1.jpg"
var agent=navigator.userAgent.toLowerCase();
var is_iphone = ((agent.indexOf('iphone') != -1));
var is_ipad = ((agent.indexOf('ipad') != -1));
var is_safari = ((agent.indexOf('safari') != -1));

function menu_appear(menu_item,delay_count,offset){
	var width_1 = 250 + Math.random()*50 + "px"
	var width_2 = 150 + Math.random()*50 + "px"
	
	$(menu_item).delay(delay_count+700).animate(
		{"opacity":"1"},
		{duration: 150
		,ease: "swing"
		,queue: true}
	)
	$($(menu_item).next()).delay(delay_count).animate(
		{"width":width_1},
		{duration: 250
		,ease: "swing"
		,queue: true}
	).animate(
			{"width":"175px","left":"100px"},
			{duration: 250
			,ease: "swing"
			,queue: true}
	).animate(
			{"background-color":"white","left":"20px"},
			{duration: 150
			,ease: "swing"
			,queue: true}
	).fadeOut("slow",function(){
		//$(menu_item).css("visibility","visible")
	}
	);
}
$(document).ready(function() {
	$('.content-container').css("display","none")
	//=====LIGHT BOX
	function positionLightboxImage() {
	  var top = ($(window).height() - $('#lightbox').height()) / 2;
	  var left = ($(window).width() - $('#lightbox').width()) / 2;
	  $('#lightbox')
	    .css({
	      'top': top + $(document).scrollTop(),
	      'left': left
	    })
	    .fadeIn();
	}

	function removeLightbox() {
	  $('#overlay, #lightbox').fadeOut('slow', function() {
	      $(this).remove();
	      $('body').css('overflow-y', 'auto'); // show scrollbars!
	    });
	}
	$('a.lightbox').click(function(e) {
		$('embed').remove();
    //$('body').css('overflow-y', 'hidden'); // hide scrollbars!

    $('<div id="overlay"></div>')
      .css('top', $(document).scrollTop())
      .css('opacity', '0')
      .animate({'opacity': '0.7'}, 'slow').click(function() {
        removeLightbox();
      })
      .appendTo('body');

    $('<div id="lightbox"></div>')
      .hide()
      .appendTo('body');

    $('<img />')
      .attr('src', $(this).attr('href')).css("border","0px")
      .load(function() {
        positionLightboxImage();
      }).click(function() {
	        removeLightbox();
	      }).appendTo('#lightbox');

    return false;;
	});
	//=======END LIGHT BOX
	//changePage("#page1")
	$(".preloader").delay(600).slideToggle(600,"swing");
	$(".bg2").css("display", "none");
	$("body").css("overflow-x", "hidden");
	//=======ANIMATION FOR MAIN MENU===========
	//====FIX SAFARI MARGIN PROBLEM============
	if(is_safari){
	}
	//=====menu-animation=====================
	menu_appear("#main-1-link",1250);
	menu_appear("#main-8-link",1500);
	menu_appear("#main-2-link",1750);
	menu_appear("#main-7-link",2000);
	menu_appear("#main-3-link",2250);
	menu_appear("#main-6-link",2500);
	menu_appear("#main-4-link",2750);
	menu_appear("#main-5-link",3000);
	//==============
	$('.close-content').click(function(){
		$(this).parent().slideToggle("slow");
	});
	//alert($('#main-1-link').next());
	$('#main-1-link').click(function(){
		if($('#sub-menu-6').css("display") != "none"){
				$('#sub-menu-6').slideToggle("fast");
		}
		if($('#homePage').css("display") == "none"){
				$('#homePage').slideToggle("fast");
		}
		changePage("#homePage","bg_1.jpg");
		//switchBg("bg1.jpg");
		// pageComeOut();
	});
	$('#main-2-link').click(function(){
			if($('#sub-menu-6').css("display") != "none"){
					$('#sub-menu-6').slideToggle("fast");
			}
		changePage("#venuePage","bg_2.jpg");
		//switchBg("bg7.jpg");
		// pageComeOut();
	});
	$('#main-3-link').click(function(){
			if($('#sub-menu-6').css("display") != "none"){
					$('#sub-menu-6').slideToggle("fast");
			}
		changePage("#galleryPage","bg_3.jpg");
		//switchBg("bg6.jpg");
	});
	$('#main-4-link').click(function(){
			if($('#sub-menu-6').css("display") != "none"){
					$('#sub-menu-6').slideToggle("fast");
			}
		changePage("#reservationPage","reservation.jpg");
		//switchBg("bg6.jpg");
	});
	$('#main-5-link').click(function(){
			if($('#sub-menu-6').css("display") != "none"){
					$('#sub-menu-6').slideToggle("fast");
			}
		changePage("#calendarPage","bg_5.jpg");
		//switchBg("bg6.jpg");
	});
	$('#main-6-link').click(function(){
		if($('#sub-menu-6').css("display") != "none"){
				$('#sub-menu-6').slideToggle("fast");
		}
		changePage("#happyHourPage","happy_hour.jpg");
		}
	)
	$('#main-7-link').click(function(){
			switchBg('bg_6.jpg');
			if($('#sub-menu-6').css("display") != "none"){
					$('#sub-menu-6').slideToggle("fast");
			}
			$('#sub-menu-6').slideToggle("fast");
		}
	);
	$('#main-8-link').click(function(){
			if($('#sub-menu-6').css("display") != "none"){
					$('#sub-menu-6').slideToggle("fast");
			}
		changePage("#contactPage","contact.jpg");
		//switchBg("bg6.jpg");
	});
		// pageComeOut();
	//=====MOUSE ENTER MENU ITEM==============
	$('#main-1-link,#main-2-link,#main-3-link,#main-4-link,#main-5-link,#main-6-link,#main-7-link,#main-8-link').hover(
	  function () {
			$(this).next().css(
				//alert($(this).width())
				{"display":"block","background-color":"#931616","left":"-75px","width":"5px","opacity":"0"}
			);
			$(this).next().animate(
				//alert($(this).width())
				{"width":"120px","opacity":"1"},
				{duration: 200
				,ease: "swing"
				,queue: false}
			);
			$(this).css("color","#931616");
			$(this).css("background-color","#FFFFFF");
			$(this).animate(
				//alert($(this).width())
				{"margin-left":"10px","letter-spacing":"0.50em"},
				{duration: 200
				,ease: "swing"
				,queue: false}
			);
	  }
		,
		 function () {
			$(this).next().animate(
				//alert($(this).width())
				{"width":"0px","opacity":"0"},
				{duration: 200
				,ease: "swing"
				,queue: false}
			);
			$(this).animate(
				//alert($(this).width())
				{"margin-left":"0px","letter-spacing":"0.15em"},
				{duration: 200
				,ease: "swing"
				,queue: false}
			);
			$(this).css("color","#FFFFFF");
			$(this).css("background-color","transparent");
		  }
	);
	//=====MOUSE ENTER MENU ITEM==============
	$('#sub-menu-6-item-1,#sub-menu-6-item-2,#sub-menu-6-item-3,#sub-menu-6-item-4,#sub-menu-6-item-5,#sub-menu-6-item-6').hover(
	  function () {
			$(this).children().first().fadeIn().animate(
				//alert($(this).width())
				{"height":"15px","margin-top":"2px","width":"30px"},
				{duration: 200
				,ease: "swing"
				,queue: false}
			);
			$(this).css("color","#931616")
	  }
		,
		 function () {
			
					$(this).children().first().fadeIn().animate(
						//alert($(this).width())
						{"height":"2px","margin-top":"7px","width":"7px"},
						{duration: 200
						,ease: "swing"
						,queue: false}
					);
					$(this).css("color","white")
		  }
	);
	$('#sub-menu-6-item-1').click(function(){
			changePage("#menuPage-1","bg_1_3.jpg");
		}
	)
	$('#sub-menu-6-item-2').click(function(){
			changePage("#menuPage-2","bg_1_3.jpg");
		}
	)
	$('#sub-menu-6-item-3').click(function(){
			changePage("#menuPage-3","bg_4.jpg");
		}
	)
	$('#sub-menu-6-item-4').click(function(){
			changePage("#menuPage-4","wine_bottles.jpg");
		}
	)
	$('#sub-menu-6-item-5').click(function(){
			changePage("#menuPage-5","brunch.jpg");
		}
	)
	$('#sub-menu-6-item-6').click(function(){
			changePage("#menuPage-6","cocktails.jpg");
		}
	)
	setInterval(slideShow,4000);
});
function ipadFunc(){
	if(is_ipad
		|| is_iphone){
		//window.location.reload(true);
		//alert(parseInt($("window").css("height")))
		//alert(window.orientation)
		if( parseInt($(".content-container").css("height")) > 600
		&& (window.orientation == 90 ||  window.orientation == -90)
		){
			$(".bg1").css(
				{"height": parseInt($(".content-container").css("height"))+ 150 +"px"}
				);
			$(".bg2").css(
				{"height": parseInt($(".content-container").css("height"))+ 150 +"px"}
				);
		}else{
				$(".bg1").css(
					{"height": "100%"}
					);
				$(".bg2").css(
					{"height": "100%"}
					);
		}
	};
}
$(window).resize(function() {
 	var middlePoint = (parseInt($("body").css("width"))/2) - (parseInt($(currentPage).css("width"))/2) + 30 + "px"
	//alert("tutu")
	//$(currentPage).css("left",middlePoint)
});

//===============

function changePage(targetPage,targetBg){
	var inPoint = (parseInt($("body").css("width"))/2) - (parseInt($(targetPage).css("width"))/2) - 100 + "px"
	//var inPoint = "370px"
	var outPoint2 =  (0 - parseInt($(targetPage).css("width"))) + "px"
	var outPoint =  (parseInt($("body").css("width")) + parseInt($(targetPage).css("width"))) + "px"
	//alert(inPoint);
	if(currentPage != targetPage){
		$(targetPage).css("left",outPoint2)
		$(targetPage).fadeIn(100).animate(
		{'left':inPoint},"slow","swing"	,function(){
				switchBg(targetBg);
			}
		);
		//$(currentPage).fadeOut();
		$(currentPage).animate(
		{'left':"2000px"},"slow","linear"
		).fadeOut("fast",function(){
			//switchBg(targetBg);
		});
		currentPage = targetPage
	};
}
function slideShow(){
	//alert(currentPage)
	if(currentPage == "#homePage"
	|| currentPage == "#page0"){
		whichPic += 1;
		if(whichPic == 1){
			switchBg("bg_1.jpg");
		}
		if(whichPic == 2){
			switchBg("bg_1_2.jpg");
		}
		if(whichPic == 3){
			switchBg("bg_1_4.jpg");
		}
		if(whichPic == 4){
			switchBg("bg_1_5.jpg");
			whichPic = 0;
		}

	}
	//$(".bg").delay("300").fadeIn();
}
function switchBg(whichBg){
	if(bg_1_pic != whichBg){
	$(".bg2").css("display","block");
	$(".bg2").css("background-image","url(/images/"+ bg_1_pic + ")");
	$(".bg1").css("display","none");
	$(".bg1").css("background-image","url(/images/"+ whichBg + ")");
	
	$(".bg2").fadeOut(1500);
	$(".bg1").fadeIn(1500);
	bg_2_pic = bg_1_pic;
	bg_1_pic = whichBg;
	}
}
