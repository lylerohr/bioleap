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

    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

    if (vw <= 768) {
        jQuery(".bl_filter-group__name").parent().addClass("collapse");
        console.log("Thing happened.");
    }

    jQuery(".bl_filter-group__name").click( function() {
        jQuery(this).parent().toggleClass("collapse");
    });

    jQuery(".bl_header__tofuburger").click( function() {
        jQuery(".bl_header__menus").toggleClass("open");
    });

    var showDescription = 0;

    jQuery(".bl_product-description__view-more").click(function() {

        if (showDescription == 0) {
            jQuery(".bl_product-description__copy").addClass("expand");
            jQuery(this).html("view less...");
            showDescription = 1;
        } else {
            jQuery(".bl_product-description__copy").removeClass("expand");
            jQuery(this).html("view more...");
            showDescription = 0;
        }

    });

});

function showModal(refID) {
    var modalID = refID.id.toString();
    var modal = document.getElementById(modalID);
    modal.classList.add('show');
}

function hideModal(refID) {
    var modalID = refID.id.toString();
    var modal = document.getElementById(modalID);
    modal.classList.remove('show');
    //document.getElementsByTagName('iframe').attr('src', document.getElementsByTagName('iframe').attr('src'));
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


if (document.getElementById("edit-product-search--2")) {
    document.getElementById("edit-product-search--2").placeholder = "search products...";
}
