$(document).ready( function() {

    var menu = 0;
    $('.cd_menu-button').click( function() {
        if (menu===0) {
            $('.cd_menu-button').addClass('active');
            $('.cd_template__component-menu').addClass('active');
            menu=1;
        } else {
            $('.cd_menu-button').removeClass('active');
            $('.cd_template__component-menu').removeClass('active');
            menu=0;
        }

    });


    $('a').click(function(){
    $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 750);
        return false;
    });
});
