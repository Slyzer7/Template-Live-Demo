$(function (){
    "use strict";

    var wind = $(window);

    /* >>>>>>>>> smooth-scroll >>>>>>>>>>*/
    $('.navbar-nav').singlePageNav({
        speed:1000,
        currentClass:'active',
        offset:60
    });

    /* >>>>>>>>> navbar scrolling background >>>>>>>>>>*/
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar-default");

        if(bodyScroll > 300){

            navbar.addClass("nav-scroll");

        }else{

            navbar.removeClass("nav-scroll");
        }
    });

    /* >>>>>>>>> smooth button scroll >>>>>>>>>>*/
    $('.button-scroll').on('click', function(){
      
        var scrollTo = $(this).attr('data-scrollTo');

        $('body, html').animate({

        "scrollTop": $('#'+scrollTo).offset().top - 60
        }, 1000 );

    }); 


    /* >>>>>>>>> progress bar >>>>>>>>>>*/
    wind.on('scroll', function () {
        $(".skill_progression span").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });


    /* >>>>>>>>> Tabs >>>>>>>>>>*/
    $(".services").on("click", "li", function(){

        var myID = $(this).attr("id");

        $(this).addClass("active").siblings().removeClass("active");

        $(".services .item").hide();

        $("#" + myID + "-content").fadeIn();

    });


    /* >>>>>>>>> magnific-popup >>>>>>>>>>*/
    $('.portfolio .link').magnificPopup({
      delegate: 'a',
      type: 'image'
    });


    /* >>>>>>>>> owlCarousel >>>>>>>>>>*/
    $('.demo4 .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        mouseDrag:false,
        autoplay:true,
        dots:false,
        nav:true,
        navText:['<span> <i class="fa fa-angle-left" aria-hidden="true"></i> </span>',
        '<span> <i class="fa fa-angle-right" aria-hidden="true"></i> </span>'],
        smartSpeed:500
    });

    /* >>>>>>>>> owlCarousel >>>>>>>>>>*/
    $('.Reviews .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500
    });

    /* >>>>>>>>> stellar >>>>>>>>>>*/
    wind.stellar();


    /* >>>>>>>>> isotope >>>>>>>>>>*/
    $('.gallery').isotope({
      itemSelector: '.item-img'
    });

    var $gallery = $('.gallery').isotope({
    });

    /* >>>>>>>>> filter items on button click >>>>>>>>>>*/
    $('.filtering').on( 'click', 'span', function() {
        var filterValue = $(this).attr('data-filter');
        $gallery.isotope({ filter: filterValue });
    });

    $('.filtering').on( 'click', 'span', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });


    /* >>>>>>>>> map >>>>>>>>>>*/
    $(".map-toggle").click(function (){
        $(".map-loc").slideToggle(10);
        $("span").toggleClass("open");
    });

});


/* >>>>>>>>> Page-Loader >>>>>>>>>>*/
$(window).on("load",function (){
    $(".page-loader").fadeOut(500);

    /* >>>>>>>>> contact form >>>>>>>>>>*/
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

});

/* >>>>>>>>> Animation Code >>>>>>>>>>*/
$(document).ready(function() {
    $(window).scroll( function(){
        $('.hide-me').each( function(i){   
            var bottom_of_object = $(this).position().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},780);    
            }
            
        }); 
    
    });
    
});
