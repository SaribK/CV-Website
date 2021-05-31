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
        strings: ["Computer Scientist", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Computer Scientist", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
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

    $('.card').on('click', function(event){
        var $this = $(this);

        // project 1
        if ($this.hasClass('proj1')) {
            $(".navbar").hide();
            document.getElementById("popup-1").style.width = "100%";
            disableScroll();
        }
        else if ($this.hasClass('proj2')) {
            $(".navbar").hide();
            document.getElementById("popup-2").style.width = "100%";
            disableScroll();
        }
        else if ($this.hasClass('proj3')) {
            $(".navbar").hide();
            document.getElementById("popup-3").style.width = "100%";
            disableScroll();
        }
        else if ($this.hasClass('proj4')) {
            $(".navbar").hide();
            document.getElementById("popup-4").style.width = "100%";
            disableScroll();
        }
        else if ($this.hasClass('proj5')) {
            $(".navbar").hide();
            document.getElementById("popup-5").style.width = "100%";
            disableScroll();
        }
        else if ($this.hasClass('proj6')) {
            $(".navbar").hide();
            document.getElementById("popup-6").style.width = "100%";
            disableScroll();
        }
        else if ($this.hasClass('proj7')) {
            $(".navbar").hide();
            document.getElementById("popup-7").style.width = "100%";
            disableScroll();
        }
        else if ($this.hasClass('proj8')) {
            $(".navbar").hide();
            document.getElementById("popup-8").style.width = "100%";
            disableScroll();
        }
        else if ($this.hasClass('proj9')) {
            $(".navbar").hide();
            document.getElementById("popup-9").style.width = "100%";
            disableScroll();
        }
        else if ($this.hasClass('proj10')) {
            $(".navbar").hide();
            document.getElementById("popup-10").style.width = "100%";
            disableScroll();
        }
        else if ($this.hasClass('proj11')) {
            $(".navbar").hide();
            document.getElementById("popup-11").style.width = "100%";
            disableScroll();
        }
        else if ($this.hasClass('proj12')) {
            $(".navbar").hide();
            document.getElementById("popup-12").style.width = "100%";
            disableScroll();
        }
        else if ($this.hasClass('proj13')) {
            $(".navbar").hide();
            document.getElementById("popup-13").style.width = "100%";
            disableScroll();
        }
        else if ($this.hasClass('proj14')) {
            $(".navbar").hide();
            document.getElementById("popup-14").style.width = "100%";
            disableScroll();
        }
      });
});

function hidePopup1() {
    document.getElementById("popup-1").style.width = "0%";
    $(".navbar").show();
    enableScroll();
}

function hidePopup2() {
    document.getElementById("popup-2").style.width = "0%";
    $(".navbar").show();
    enableScroll();
}

function hidePopup3() {
    document.getElementById("popup-3").style.width = "0%";
    $(".navbar").show();
    enableScroll();
}

function hidePopup4() {
    document.getElementById("popup-4").style.width = "0%";
    $(".navbar").show();
    enableScroll();
}

function hidePopup5() {
    document.getElementById("popup-5").style.width = "0%";
    $(".navbar").show();
    enableScroll();
}

function hidePopup6() {
    document.getElementById("popup-6").style.width = "0%";
    $(".navbar").show();
    enableScroll();
}

function hidePopup7() {
    document.getElementById("popup-7").style.width = "0%";
    $(".navbar").show();
    enableScroll();
}

function hidePopup8() {
    document.getElementById("popup-8").style.width = "0%";
    $(".navbar").show();
    enableScroll();
}

function hidePopup9() {
    document.getElementById("popup-9").style.width = "0%";
    $(".navbar").show();
    enableScroll();
}

function hidePopup10() {
    document.getElementById("popup-10").style.width = "0%";
    $(".navbar").show();
    enableScroll();
}

function hidePopup11() {
    document.getElementById("popup-11").style.width = "0%";
    $(".navbar").show();
    enableScroll();
}

function hidePopup12() {
    document.getElementById("popup-12").style.width = "0%";
    $(".navbar").show();
    enableScroll();
}

function hidePopup13() {
    document.getElementById("popup-13").style.width = "0%";
    $(".navbar").show();
    enableScroll();
}

function hidePopup14() {
    document.getElementById("popup-14").style.width = "0%";
    $(".navbar").show();
    enableScroll();
}

//disable scrolling
function disableScroll() {
    document.body.style.overflow = 'hidden';
    document.querySelector('html').scrollTop = window.scrollY;
}
    
function enableScroll() {
    document.body.style.overflow = null;
}