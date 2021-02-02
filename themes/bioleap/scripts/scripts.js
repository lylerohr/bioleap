$(document).ready( function() {

    $('.bl_product-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: true,
        asNavFor: '.bl_product-slick__nav',
    });

    $('.bl_product-slick__nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.bl_product-slick',
        focusOnSelect: true,
        infinite: true,
        centerMode: true
    });
});
