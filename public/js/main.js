// Digitalworx Custom jQuery and Javascript

$(document).ready(function() {
	
"use strict";	

/* Hamburger Menu Push Slider
---------------------------------------------------------*/

function openNav() {
	$("#mySidenav").fadeIn(750, 'easeOutCubic');
	/*if (document.documentElement.clientWidth > 1700) {
	  document.getElementById("mySidenav").style.width = "40%";
	} else {
	  document.getElementById("mySidenav").style.width = "100%";
	}
    document.getElementById("main").style.marginRight = "250px";*/
}

function closeNav() {
	$("#mySidenav").fadeOut();
    /*document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";*/
}

  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    if ($hamburger.hasClass("is-active")) {
		openNav();
		/*$('.logo, .menu-fade-wrap').fadeTo("slow", "0.2");*/
		$("body").css("overflow", "hidden");
	} else {
		closeNav();
		/*$('.logo, .menu-fade-wrap').fadeTo("slow", "1.0");*/
		$("body").css("overflow", "visible");
	}
  });



/* Waypoints and Animate.css Scroll Down Icon Fade Up on Scroll
Waypoints     http://imakewebthings.com/waypoints/
Animate.css   https://daneden.github.io/animate.css/
-------------------------------------------------------------------*/

	// hide Down Arrow on page load
	$('#down-arrow').css('opacity', 0);
		  
	$(window).bind("load", function() {
		$('#down-arrow').waypoint(function() {
			$('#down-arrow').addClass('fadeInUp');
		}, { offset: '65%' });
	});
	
	
	// hide About copy on page load
	$('#offer').css('opacity', 0);
		  
	$(window).bind("load", function() {
		$('#offer').waypoint(function() {
			$('#offer').addClass('fadeInUp');
		}, { offset: '85%' });
	});
	
	
	// hide See More Work button on page load
	$('#more-work').css('opacity', 0);
		  
	$(window).bind("load", function() {
		$('#more-work').waypoint(function() {
			$('#more-work').addClass('fadeInUp');
		}, { offset: '85%' });
	});
	
	
	// hide Learn More button on page load
	$('#learn-more').css('opacity', 0);
		  
	$(window).bind("load", function() {
		$('#learn-more').waypoint(function() {
			$('#learn-more').addClass('fadeInUp');
		}, { offset: '85%' });
	});
	
	
	// hide About Group — 3 boxes on page load
	$('.about-group').css('opacity', 0);
		  
	$(window).bind("load", function() {
		$('.about-group').waypoint(function() {
			$('.about-group').addClass('fadeInUp');
		}, { offset: '100%' });
	});
	
	
	// hide About Location grouping on page load
	$('.location').css('opacity', 0);
		  
	$(window).bind("load", function() {
		$('.location').waypoint(function() {
			$('.location').addClass('fadeInUp');
		}, { offset: '80%' });
	});
	
	
	// hide Contact Intro info grouping on page load
	$('.contact-intro').css('opacity', 0);
		  
	$(window).bind("load", function() {
		$('.contact-intro').waypoint(function() {
			$('.contact-intro').addClass('fadeInUp');
		}, { offset: '92%' });
	});
	
	
/* Checks code to ensure Modernizr is working and detecting touch devices
-----------------------------------------------------------------------------*/	
/*if (Modernizr.touch) {
alert('Touch Screen');
} else {
alert('No Touch Screen');
} 	*/
	
	
});

// WORK PAGES TABS

function openWork(evt, workSample) {
	
	"use strict";
	
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the link that opened the tab
	document.getElementById(workSample).style.display = "block";
	evt.currentTarget.className += " active";
	}  

// Get the element with id="defaultOpen" and click on it
	document.getElementById("defaultOpen").click();	


