// Change header on scroll

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".fixed-header").addClass("scrolling");
    } else {
        $(".fixed-header").removeClass("scrolling");
    }
});

// Event List Selector

$(document).ready(function(){

    $('#seminar').change(function(){
        if(this.checked)
            $('.seminar').fadeIn('fast');
        else
            $('.seminar').fadeOut('fast');
    });

    $('#webinar').change(function(){
        if(this.checked)
            $('.webinar').fadeIn('fast');
        else
            $('.webinar').fadeOut('fast');
    });

    $('#tradeshow').change(function(){
        if(this.checked)
            $('.tradeshow').fadeIn('fast');
        else
            $('.tradeshow').fadeOut('fast');
    });

    $('#studygroup').change(function(){
        if(this.checked)
            $('.studygroup').fadeIn('fast');
        else
            $('.studygroup').fadeOut('fast');
    });

});

// Mobile Menu

document.getElementById("openMobileNav").onclick = function() {openMobileNav()};

function openMobileNav() {
	document.getElementById("mobileNav").style.right = "0";
	document.getElementById("myBody").className = "no-scroll";
}

document.getElementById("closeMobileNav").onclick = function() {closeMobileNav()};

function closeMobileNav() {
	document.getElementById("mobileNav").style.right = "-100%";
	document.getElementById("myBody").className = "";
}