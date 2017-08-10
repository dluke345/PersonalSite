//Animating Page Load
  /*
var animatePageLoad;

    function animateFunction() {
        animatePageLoad = setTimeout(showPage, 2000);
    }

    function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("wrapper").style.display = "block";
    }
*/

//Load Counting
/*
    $(document).ready(function () {
        var count = 0;
        var counting = setInterval(function () {
            if (count < 101) {
                $('.numCount').text(count + '%');
                count++
            } else {
                clearInterval(counting)
            }
        }, 14);
    });
*/

//Smooth scrolling when clicking links on homepage
/*
var $root = $('html, body');
$('').click(function () {
    $root.animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 800);
    return false;
});
*/

//input validation for numbers
function isNumber(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    else {
        return true;
    }
}

//input validation for string
function isString(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;

    if (charCode > 64 && charCode < 91 || charCode > 96 && charCode < 123) {
        return true;
    }
    else {
        return false;
    }
}

//Submenu dropdown
/*
$(document).ready(function(){
    $('.dropdown-submenu a.test').on("click", function(e){
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});
*/

// Custom Theme JavaScript

    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                // $('#to-top').css({position:'fixed', display:'block'});
                $('#to-top').show("slow", function() {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function() {
                    $('#to-top').css({
                        display: 'none'
                    });
                });
            }
        }
    });
