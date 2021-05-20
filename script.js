$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else{
            $('.navbar').removeClass("sticky");
        }
    })

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Computer Scientist", "Web Designer", "App Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Computer Scientist", "Web Designer", "App Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    document.getElementById('certifications').style.display = 'none';
    document.getElementById('volunteer').style.display = 'none';

    $(".fixed-button").click(function()
    {
        $(".fixed-button").fadeOut(function () { //toggle button text
            $(".fixed-button").text(($(".fixed-button").text() == 'Next') ? 'Previous' : 'Next').fadeIn();
        })
        $(".education").slideToggle(1000); //toggle between education/work and volunteer/certifications
        $(".work").slideToggle(1000);
        $(".volunteer").slideToggle(1000);
        $(".certifications").slideToggle(1000);
    });
});