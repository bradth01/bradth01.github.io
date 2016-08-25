'use strict';

$(function() {
// nav span scrolling functionality
    $('.page-link').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('rel')).offset().top -75
        }, 700);
// prevent element id from appearing in url
        event.preventDefault();
    });

// change menu item color when hovered over
    $('.page-link').hover(function() {
        $(this).css('color', 'black');
    }, function() {
        $(this).css('color', '');
    });
});

