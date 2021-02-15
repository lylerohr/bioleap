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

    jQuery(".bl_filter-group__name").click( function() {
        jQuery(this).parent().toggleClass("collapse");
    });

});

function showModal(refID) {
    var modalID = refID.id.toString();
    var modal = document.getElementById(modalID);
    console.log(modal);
    modal.classList.add('show');
}

function hideModal(refID) {
    var modalID = refID.id.toString();
    var modal = document.getElementById(modalID);
    modal.classList.remove('show');
}

function removeWishlistItem(el) {
    var currentEl = el.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute("data-drupal-selector");
    var btnID = currentEl.substr(11,1);
    var idstart = "edit-items-";
    var idend = "-actions-remove";
    var tgtbtid = idstart.concat(btnID).concat(idend);
    var targetBtn = document.getElementById(tgtbtid);
    targetBtn.click();
}

document.getElementById("edit-product-search--2").placeholder = "search products...";
document.getElementsByClassName("facet-item__status").innerHTML = "Hello!";
