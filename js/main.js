//jQuery stuff
$(document).ready(function() {
    //Sets the height of the hero image div to the viewport height
    function setHeight() {
        windowHeight = $(window).innerHeight();
        windowWidth = $(window).outerWidth();
        //If it's mobile, set to full height
        if (windowWidth < 650) {
            $('#hero').css('min-height', windowHeight)
        }
        /*
            If you're on your desktop, and you make the viewport smaller, when you size it larger, the proper height needs to be reset.
        */
        else {
            $('#hero').css('min-height', 500)
        }
    };
    
    //Sets the top margin for the hero content to center it veritcally
    function setMargin() {
        windowHeight = $(window).innerHeight();
        windowWidth = $(window).outerWidth();
        marginValue = 165;
        
        // vertical stack of contents on mobile requires some tweaking
        if (windowWidth < 650) {
            marginValue = (windowHeight/2)-180;
        }
        
        $('#heroContent').css('margin-top', marginValue)
    };
    
    //called on page load
    setHeight();
    setMargin();

    //called on window resize
    $(window).resize(function() {
        setHeight();
        setMargin();
    });
});