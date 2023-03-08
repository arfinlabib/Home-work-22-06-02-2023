$(function () {
    'use strict';
    $('.filter-container').filterizr({
        
    });
    $(window).on('scroll', function () {
        var scrollSize = $(window).scrollTop()
        if (scrollSize > 500) {
            $('#backToTop').show();
        } 
        else {
            $('#backToTop').slideUp()
        }
    })
    // $('#backToTop').on('click', function () {
    //     $('html,body').animate({
    //         scrollTop: 0
    //     }, 2000)
    // })
})