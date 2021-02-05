jQuery(document).ready( function() {

    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();

        if (scroll >= 1) {
            jQuery(".bl_header").addClass("squished");
        } else {
            jQuery(".bl_header").removeClass("squished");
        }
    });

    jQuery('.bl_product-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: true,
        asNavFor: '.bl_product-slick__nav',
    });

    jQuery('.bl_product-slick__nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.bl_product-slick',
        focusOnSelect: true,
        infinite: true,
        centerMode: true
    });


});
