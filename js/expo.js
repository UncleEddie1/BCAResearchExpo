// JavaScript Document
( function( $ ) {
	"use strict";
    $(document).ready(function(){
		//var submitIcon = $('.sb-icon-search');
        /*var submitInput = $('.search-input');
        var searchBox = $('.search');
        var isOpen = false;
        
        $(document).mouseup(function(){
            if(isOpen === true){
            submitInput.val('');
            $('.search-submit').css('z-index','-999');
            submitIcon.click();
            }
        });
        
        submitIcon.mouseup(function(){
            return false;
        });
        
        searchBox.mouseup(function(){
            return false;
        });
                
        submitIcon.click(function(){
            if(isOpen === false){
                searchBox.addClass('search-open');
                isOpen = true;
            } else {
                searchBox.removeClass('search-open');
                isOpen = false;
            }
    });*/

	$('#homeNav').prepend('<div id="menu-button">Menu</div>');
		$('#homeNav #menu-button').on('click', function(){
			var menu = $(this).next('ul');
			if (menu.hasClass('open')) {
				menu.removeClass('open');
			}
			else {
				menu.addClass('open');
			}
		});
});
} )( jQuery );

//For manual slide show____________________________________________________________________
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	"use strict";
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	"use strict";
	showSlides(slideIndex = n);
}

function showSlides(n) {
	"use strict";
  var i;
  var slides = document.getElementsByClassName("expoSlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1;} 
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}