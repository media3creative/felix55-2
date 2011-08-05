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
	
	jQuery(menu_item).delay(delay_count+700).animate(
		{"opacity":"1"},
		{duration: 150
		,ease: "swing"
		,queue: true}
	)
	jQuery(jQuery(menu_item).next()).delay(delay_count).animate(
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
		//jQuery(menu_item).css("visibility","visible")
	}
	);
}
jQuery.noConflict();
jQuery(document).ready(function() {
	var stageHeight = parseInt(jQuery(window).height()) - 20 + "px";
	jQuery('.left-side-bar').css("height",stageHeight);
	jQuery('.content-container').css("display","none")
	//=====LIGHT BOX
	
	//=======END LIGHT BOX
	//changePage("#page1")
	jQuery(".preloader").delay(600).slideToggle(600,"swing");
	jQuery(".bg2").css("display", "none");
	jQuery("body").css("overflow-x", "hidden");
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
	jQuery('.close-content').click(function(){
		jQuery(this).parent().slideToggle("slow");
	});
	//alert(jQuery('#main-1-link').next());
	jQuery('#main-1-link').click(function(){
		if(jQuery('#sub-menu-6').css("display") != "none"){
				jQuery('#sub-menu-6').slideToggle("fast");
		}
		if(jQuery('#homePage').css("display") == "none"){
				jQuery('#homePage').slideToggle("fast");
		}
		changePage("#homePage","bg_1.jpg");
		//switchBg("bg1.jpg");
		// pageComeOut();
	});
	jQuery('#main-2-link').click(function(){
			if(jQuery('#sub-menu-6').css("display") != "none"){
					jQuery('#sub-menu-6').slideToggle("fast");
			}
		changePage("#venuePage","bg_2.jpg");
		//switchBg("bg7.jpg");
		// pageComeOut();
	});
	jQuery('#main-3-link').click(function(){
			if(jQuery('#sub-menu-6').css("display") != "none"){
					jQuery('#sub-menu-6').slideToggle("fast");
			}
		changePage("#galleryPage","bg_3.jpg");
		//switchBg("bg6.jpg");
	});
	jQuery('#main-4-link').click(function(){
			if(jQuery('#sub-menu-6').css("display") != "none"){
					jQuery('#sub-menu-6').slideToggle("fast");
			}
		changePage("#reservationPage","reservation.jpg");
		//switchBg("bg6.jpg");
	});
	jQuery('#main-5-link').click(function(){
			if(jQuery('#sub-menu-6').css("display") != "none"){
					jQuery('#sub-menu-6').slideToggle("fast");
			}
		changePage("#calendarPage","bg_5.jpg");
		//switchBg("bg6.jpg");
	});
	jQuery('#main-6-link').click(function(){
		if(jQuery('#sub-menu-6').css("display") != "none"){
				jQuery('#sub-menu-6').slideToggle("fast");
		}
		changePage("#happyHourPage","happy_hour.jpg");
		}
	)
	jQuery('#main-7-link').click(function(){
			switchBg('bg_6.jpg');
			if(jQuery('#sub-menu-6').css("display") != "none"){
					jQuery('#sub-menu-6').slideToggle("fast");
			}
			jQuery('#sub-menu-6').slideToggle("fast");
		}
	);
	jQuery('#main-8-link').click(function(){
			if(jQuery('#sub-menu-6').css("display") != "none"){
					jQuery('#sub-menu-6').slideToggle("fast");
			}
		changePage("#contactPage","contact.jpg");
		//switchBg("bg6.jpg");
	});
		// pageComeOut();
	//=====MOUSE ENTER MENU ITEM==============
	jQuery('#main-1-link,#main-2-link,#main-3-link,#main-4-link,#main-5-link,#main-6-link,#main-7-link,#main-8-link').hover(
	  function () {
			jQuery(this).next().css(
				//alert(jQuery(this).width())
				{"display":"block","background-color":"#931616","left":"-75px","width":"5px","opacity":"0"}
			);
			jQuery(this).next().animate(
				//alert(jQuery(this).width())
				{"width":"120px","opacity":"1"},
				{duration: 200
				,ease: "swing"
				,queue: false}
			);
			jQuery(this).css("color","#931616");
			jQuery(this).css("background-color","#FFFFFF");
			jQuery(this).animate(
				//alert(jQuery(this).width())
				{"margin-left":"10px","letter-spacing":"0.50em"},
				{duration: 200
				,ease: "swing"
				,queue: false}
			);
	  }
		,
		 function () {
			jQuery(this).next().animate(
				//alert(jQuery(this).width())
				{"width":"0px","opacity":"0"},
				{duration: 200
				,ease: "swing"
				,queue: false}
			);
			jQuery(this).animate(
				//alert(jQuery(this).width())
				{"margin-left":"0px","letter-spacing":"0.15em"},
				{duration: 200
				,ease: "swing"
				,queue: false}
			);
			jQuery(this).css("color","#FFFFFF");
			jQuery(this).css("background-color","transparent");
		  }
	);
	//=====MOUSE ENTER MENU ITEM==============
	jQuery('#sub-menu-6-item-1,#sub-menu-6-item-2,#sub-menu-6-item-3,#sub-menu-6-item-4,#sub-menu-6-item-5,#sub-menu-6-item-6').hover(
	  function () {
			jQuery(this).children().first().fadeIn().animate(
				//alert(jQuery(this).width())
				{"height":"15px","margin-top":"2px","width":"30px"},
				{duration: 200
				,ease: "swing"
				,queue: false}
			);
			jQuery(this).css("color","#931616")
	  }
		,
		 function () {
			
					jQuery(this).children().first().fadeIn().animate(
						//alert(jQuery(this).width())
						{"height":"2px","margin-top":"7px","width":"7px"},
						{duration: 200
						,ease: "swing"
						,queue: false}
					);
					jQuery(this).css("color","white")
		  }
	);
	jQuery('#sub-menu-6-item-1').click(function(){
			changePage("#menuPage-1","bg_1_3.jpg");
		}
	)
	jQuery('#sub-menu-6-item-2').click(function(){
			changePage("#menuPage-2","bg_1_3.jpg");
		}
	)
	jQuery('#sub-menu-6-item-3').click(function(){
			changePage("#menuPage-3","bg_4.jpg");
		}
	)
	jQuery('#sub-menu-6-item-4').click(function(){
			changePage("#menuPage-4","wine_bottles.jpg");
		}
	)
	jQuery('#sub-menu-6-item-5').click(function(){
			changePage("#menuPage-5","brunch.jpg");
		}
	)
	jQuery('#sub-menu-6-item-6').click(function(){
			changePage("#menuPage-6","cocktails.jpg");
		}
	)
	setInterval(slideShow,4000);
});
function ipadFunc(){
	if(is_ipad
		|| is_iphone){
		//window.location.reload(true);
		//alert(parseInt(jQuery("window").css("height")))
		//alert(window.orientation)
		if( parseInt(jQuery(".content-container").css("height")) > 600
		&& (window.orientation == 90 ||  window.orientation == -90)
		){
			jQuery(".bg1").css(
				{"height": parseInt(jQuery(".content-container").css("height"))+ 150 +"px"}
				);
			jQuery(".bg2").css(
				{"height": parseInt(jQuery(".content-container").css("height"))+ 150 +"px"}
				);
		}else{
				jQuery(".bg1").css(
					{"height": "100%"}
					);
				jQuery(".bg2").css(
					{"height": "100%"}
					);
		}
	};
}
jQuery(window).resize(function() {
 	//var middlePoint = (parseInt(jQuery("body").css("width"))/2) - (parseInt(jQuery(currentPage).css("width"))/2) + 30 + "px"
	//alert("tutu")
	//jQuery(currentPage).css("left",middlePoint)
	var stageHeight = parseInt(jQuery(window).height()) - 20 + "px";
	jQuery('.left-side-bar').css("height",stageHeight);
});

//===============

function changePage(targetPage,targetBg){
	//var inPoint = (parseInt(jQuery("body").css("width"))/2) - (parseInt(jQuery(targetPage).css("width"))/2) - 100 + "px"
	var inPoint = "370px"
	var outPoint2 =  (0 - parseInt(jQuery(targetPage).css("width"))) + "px"
	var outPoint =  (parseInt(jQuery("body").css("width")) + parseInt(jQuery(targetPage).css("width"))) + "px"
	//alert(inPoint);
	if(currentPage != targetPage){
		jQuery(targetPage).css("left",outPoint2)
		jQuery(targetPage).fadeIn(100).animate(
		{'left':inPoint},"slow","swing"	,function(){
				switchBg(targetBg);
			}
		);
		//jQuery(currentPage).fadeOut();
		jQuery(currentPage).animate(
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
	//jQuery(".bg").delay("300").fadeIn();
}
function switchBg(whichBg){
	if(bg_1_pic != whichBg){
	jQuery(".bg2").css("display","block");
	jQuery(".bg2").css("background-image","url(/images/"+ bg_1_pic + ")");
	jQuery(".bg1").css("display","none");
	jQuery(".bg1").css("background-image","url(/images/"+ whichBg + ")");
	
	jQuery(".bg2").fadeOut(1500);
	jQuery(".bg1").fadeIn(1500);
	bg_2_pic = bg_1_pic;
	bg_1_pic = whichBg;
	}
}
