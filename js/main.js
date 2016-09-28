// Change header on scroll

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".fixed-header").addClass("scrolling");
    } else {
        $(".fixed-header").removeClass("scrolling");
    }
});

// Mobile Menu

document.getElementById("openMobileNav").onclick = function() {openMobileNav()};

function openMobileNav() {
    document.getElementById("mobileNav").style.right = "0";
    document.getElementsByTagName("body").className = "overflow-hidden";
}

document.getElementById("closeMobileNav").onclick = function() {closeMobileNav()};

function closeMobileNav() {
    document.getElementById("mobileNav").style.right = "-100%";
    document.getElementsByTagName("body").className.replace("overflow-hidden", "");
}