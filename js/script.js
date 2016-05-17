"use strict";function parallaxInit(){$("#testimonial").parallax("50%",.2);$("#quote").parallax("50%",.2)}var image="images/slide.jpg";var onMobile=false;var isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};if(isMobile.any())onMobile=true;$(window).load(function(){$("#intro-loader").delay(600).fadeOut();$(".mask").delay(600).fadeOut("slow")});$(window).bind("load",function(){if(!onMobile)parallaxInit()});$(document).ready(function(){"use strict";$(".item_top").each(function(){$(this).appear(function(){$(this).delay(200).animate({opacity:1,top:"0px"},1e3)})});$(".item_bottom").each(function(){$(this).appear(function(){$(this).delay(200).animate({opacity:1,bottom:"0px"},1e3)})});$(".item_left").each(function(){$(this).appear(function(){$(this).delay(200).animate({opacity:1,left:"0px"},1e3)})});$(".item_right").each(function(){$(this).appear(function(){$(this).delay(200).animate({opacity:1,right:"0px"},1e3)})});$(".item_fade_in").each(function(){$(this).appear(function(){$(this).delay(200).animate({opacity:1,right:"0px"},1e3)})});if($("#pie-container").length)rotate("rotate1");$("#home").backstretch([image]);$("body").on("touchstart.dropdown",".dropdown-menu",function(e){e.stopPropagation()});$(window).scroll(function(){if($(window).scrollTop()>400){$("#back-top").fadeIn(200)}else{$("#back-top").fadeOut(200)}});$("#back-top").click(function(e){$("html, body").stop().animate({scrollTop:0},1500,"easeInOutExpo");e.preventDefault()});$("a[data-gal^='prettyPhoto']").prettyPhoto({animation_speed:"normal",theme:"light_rounded",opacity:.5,social_tools:false,deeplinking:false})});$(window).load(function(){$("body").scrollspy({target:".nav-menu",offset:75})});$(".bg-image-holder").each(function(){var e=$(this).children("img").attr("src");$(this).css("background",'url("'+e+'") 50% 0%');$(this).children(".background-image").remove()});if($("ul.timeline").length){$("ul.timeline .open").find(".content").slideDown();$("ul.timeline").on("click","li",function(){var e=$(this);e.find(".content").slideDown();e.addClass("open");e.siblings("li.open").find(".content").slideUp();e.siblings("li").removeClass("open")}).on("mouseenter","li",function(){var e=$(this);e.hasClass("open")})}$(function(){var e=window.location.href;var t={twitter:true,facebook:true,googlePlus:true,pinterest:false,tumblr:false};$(".socialShare").shareButtons(e,t)});$(".nav-toggle").hover(function(){$(this).find(".dropdown-menu").first().stop(true,true).fadeIn(450)},function(){$(this).find(".dropdown-menu").first().stop(true,true).fadeOut(450)});$(".scroll").bind("click",function(e){var t=$(this);var n=$("#navigation, #navigation-sticky").outerHeight();$("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top-n+"px"},1200,"easeInOutExpo");e.preventDefault()});if($(".headerWrapper").length){var menu=$("#navigation");$(window).scroll(function(){var e=$(this).scrollTop();var t=$(".headerWrapper").outerHeight();var n=$("#navigation").outerHeight();var r=$(".headerWrapper").offset().top+t-n-72;if(e>=r){menu.removeClass("first-nav").addClass("second-nav")}else{menu.removeClass("second-nav").addClass("first-nav")}});var menu2=$("#navigation-sticky");$(window).scroll(function(){var e=$(this).scrollTop();var t=$(".headerWrapper").outerHeight();var n=$("#navigation-sticky").outerHeight();var r=$(".headerWrapper").offset().top+t-n-72;if(e>=r){menu2.removeClass("trans-nav").addClass("color-nav second-nav");if($(".light-logo").length&&$(".dark-logo").length){$(".light-logo").css("display","none");$(".dark-logo").css("display","block")}}else{menu2.removeClass("color-nav second-nav").addClass("trans-nav");if($(".light-logo").length&&$(".dark-logo").length){$(".dark-logo").css("display","none");$(".light-logo").css("display","block")}}})}$(".mobile-nav-button").click(function(){$(".nav-inner div.nav-menu").slideToggle("medium",function(){})});$(".nav-inner div.nav-menu ul.nav li a").click(function(){if($(window).width()<1e3){$(".nav-menu").slideToggle("2000")}});if(jQuery().owlCarousel){if($(".testimonial").length){$(".testimonial").owlCarousel({navigation:false,pagination:true,responsive:true,slideSpeed:600,paginationSpeed:1e3,transitionStyle:"fadeUp",items:1,touchDrag:true,mouseDrag:true,autoHeight:true,autoPlay:5e3})}if($("#client_carrousel").length){$("#client_carrousel").owlCarousel({navigation:false,pagination:false,stopOnHover:true,itemsScaleUp:true,items:5,responsive:{0:{items:1},480:{items:2},768:{items:3},992:{items:4},1200:{items:5}},autoPlay:4e3})}if($(".gallery-slider").length){$(".gallery-slider").owlCarousel({stopOnHover:true,navigation:true,navigationText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],paginationSpeed:3e3,goToFirstSpeed:2e3,autoHeight:true,singleItem:true,transitionStyle:"fade"})}}if($("#flickr-feed").length){var flickr_id="60913863@N08";var $flcr_feed;$flcr_feed=$("#flickr-feed");if($flcr_feed.length){$("#flickr-feed").jflickrfeed({limit:$flcr_feed.data("items"),qstrings:{id:flickr_id},itemTemplate:'<li><a href="{{image_b}}" rel="prettyPhoto[flickr]"><img src="{{image_s}}" alt="{{title}}" /><span><i class="fa fa-search"></i></span></a></li>',itemCallback:function(){$("a[rel='prettyPhoto[flickr]']").prettyPhoto({animation_speed:"normal",theme:"light_rounded",opacity:.5,social_tools:false,deeplinking:false,changepicturecallback:function(){$(".pp_pic_holder").show()}})}})}}$(window).load(function(){"use strict";if($("#contactform").length){$(".validate").validate();var e=$("#contactform");var t=$("#contactForm_submit");var n=$(".form-respond");$(document).on("submit","#contactform",function(r){r.preventDefault();$.ajax({url:"sendemail.php",type:"POST",dataType:"html",data:e.serialize(),beforeSend:function(){n.fadeOut();t.html("Sending....")},success:function(t){e.fadeOut(300);n.html(t).fadeIn(1e3);setTimeout(function(){n.html(t).fadeOut(300);$("#name, #email, #message").val("");e.fadeIn(1800)},4e3)},error:function(e){console.log(e)}})})}$("a.external").click(function(){var e=$(this).attr("href");$(".mask").fadeIn(600,function(){document.location.href=e});$("#intro-loader").fadeIn("slow");return false});if($(".blog-posts-content").length){var r=$(".blog-posts-content");r.isotope({masonry:{},animationOptions:{duration:750,easing:"linear",queue:false}})}if($(".masonry-wrapper").length){var i=$(".masonry-wrapper"),s=$(".work-item"),o=s.outerWidth(true);i.isotope({resizable:false,masonry:{columnWidth:o}}).isotope("reLayout");$(window).smartresize(function(){var e=s.outerWidth(true);i.isotope({masonry:{columnWidth:e}})});$(".filter a").click(function(){$(".filter a").removeClass("active");$(this).addClass("active");var e=$(this).attr("data-filter");i.isotope({filter:e});i.isotope("reLayout");return false})}})