/*jslint browser: true*/
/*global $, jQuery, alert*/

//jQuery stuff
$(document).ready(function () {
    "use strict";
    //Sets the height of the hero image div to the viewport height
    function setHeight() {
        var windowHeight = $(window).innerHeight(),
            windowWidth = $(window).outerWidth();
        /*
            If it's mobile, set to full height
            
            If you're on your desktop, and you make the viewport smaller, when you size it larger, the proper height needs to be reset.
            
            last else if is to support full fold on devices with heigh less than 500px
        */
        if (windowWidth < 650) {
            $('#hero').css('min-height', windowHeight);
        } else if (windowHeight > 500 && windowWidth >= 650) {
            $('#hero').css('min-height', 500);
        } else if (windowHeight < 500 && windowWidth >= 650) {
            $('#hero').css('min-height', windowHeight);
        }
    }
    
    //Sets the top margin for the hero content to center it veritcally
    function setMargin() {
        var windowHeight = $(window).innerHeight(),
            windowWidth = $(window).outerWidth(),
            marginValue = 165;
        
        if (windowHeight < 500) {
            marginValue = (windowHeight / 2) - 85;
        }
        
        // vertical stack of contents on mobile requires some tweaking
        if (windowWidth < 650) {
            marginValue = (windowHeight / 2) - 195;
        }
        
        $('#heroContent').css('margin-top', marginValue);
    }
    
    //called on page load
    setHeight();
    setMargin();

    //called on window resize
    $(window).resize(function () {
        setHeight();
        setMargin();
    });
});