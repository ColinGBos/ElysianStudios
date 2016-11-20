//jQuery stuff
$(document).ready(function() {
    //Sets the height of the hero image div to the viewport height
    function setHeight() {
        windowHeight = $(window).innerHeight();
        $('#hero').css('min-height', windowHeight)
    };
    
    //Sets the top margin for the hero content to center it veritcally
    function setMargin() {
        windowHeight = $(window).innerHeight();
        windowWidth = $(window).innerWidth();
        marginValue = (windowHeight/2)-80;
        
        // vertical stack of contents on mobile requires some tweaking
        if (windowWidth < 650) {
            marginValue = (windowHeight/2)-130;
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