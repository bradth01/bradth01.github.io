'use strict';

// function scroll(buttonId, sectionId, precision) {
//     if (!precision) precision = 0;
//     $(buttonId).on("click", function() {
//         var offset = $(sectionId).offset.top - precision;
//         $("html, body").animate({
//             scrollTop: offset
//         }, 1000);
//     });
// }

// scroll("#home-button", "#home");
// // scroll("#projects-button", "#projects");

$("#home-button").on("click", function() {
    window.scrollTo(0, 0);
});

$("#projects-button").on("click", function() {
    var projectsOffset = $("#projects").offset().top -75;
    console.log(projectsOffset);
    $("html, body").animate({
        scrollTop: projectsOffset
    }, 500);
});

