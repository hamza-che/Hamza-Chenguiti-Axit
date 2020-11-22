$(function () {

    // Add Class Scrolled To Navbar
    $(window).on("scroll", function() {
        let navBar = $(".navbar");
        if ($(window).scrollTop() >= navBar.innerHeight()) {
            if (! navBar.hasClass("scrolled")) {
                navBar.addClass("scrolled").addClass("navbar-fixed-top");
                $("body").css({
                    "paddingTop": $(".navbar").innerHeight()
                });
            }
        } else {
            navBar.removeClass("scrolled").removeClass("navbar-fixed-top");
            $("body").css({
                "paddingTop": 0
            });
        }
    })

    // Smooth Scroll To Sections
    $(".navbar-brand, .navbar-collapse ul li a").on("click", function (event) {
        event.preventDefault()
        $("body, html").animate({
            "scrollTop": $($(this).data("scroll")).offset().top - $(".navbar").innerHeight()
        }, 500)
    })

    // Tabs Functionality
    $(".tabs-section ul li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");

        $($(this).data("tab")).siblings().removeClass("selected").end().addClass("selected")
    })
});

