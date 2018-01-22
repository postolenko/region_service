$(window).load(function() {

    var centerHeight = $(".promo-block").find(".center").height();

    $(".promo-block").css({
        "min-height" : $(window).height() - $(".header-site").height() + "px"
    });

    $(".promo-block").css({
        "padding" : ( $(".promo-block").height() - centerHeight ) / 2 + "px " + "0px"
    });

});

$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    var centerHeight;

    getThumbnailsHeght();
   
    $(window).resize(function() {

        // getPromoBlockHeight();
        centerHeight = $(".promo-block").find(".center").height();

        $(".promo-block").css({
            "min-height" : $(window).height() - $(".header-site").height() + "px"
        });

        $(".promo-block").css({
            "padding" : ( $(".promo-block").height() - centerHeight ) / 2 + "px " + "0px"
        });

        getThumbnailsHeght();

    });

    // function getPromoBlockHeight() {

    //     centerHeight = $(".promo-block").find(".center").height();

    //     $(".promo-block").css({
    //         "min-height" : $(window).height() - $(".header-site").height() + "px"
    //     });

    //     $(".promo-block").css({
    //         "padding" : ( $(".promo-block").height() - centerHeight ) / 2 + "px " + "0px"
    //     });

    // }

    function getThumbnailsHeght() {

        var thumbInnerBox;
        var thmbHeight;
        var thumbnailsHeight;

        $(".contact-thumb").find(".inner").css({
            "height" : "auto"
        });

        $(".contacts-thumbnails").each(function() {

            var thumbnailsHeights = [];

            $(this).find(".contact-thumb").each(function() {

                thumbInnerBox = $(this).find(".inner_wrapp");

                thmbHeight = thumbInnerBox.outerHeight();

                thumbnailsHeights.push(thmbHeight);             

            });

            thumbnailsHeight =  Math.max.apply(null, thumbnailsHeights);

            $(this).find(".contact-thumb .inner_wrapp").css({
                "height" : thumbnailsHeight + "px"
            });

        });

    }


});