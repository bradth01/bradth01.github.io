'use strict';

$(function() {
    const aniSpeed = 0.2;
    const projectsTriggerHook = 0.4;
    // init controller
    var controller = new ScrollMagic.Controller();

    controller.scrollTo(function(target) {

        TweenMax.to(window, 0.5, {
            scrollTo: {
                y: target,
                autoKill: true
            },
            ease: Cubic.easeInOut
        });
        
    });


    // init nav animations ???
    var projectsEnter = TweenMax.to('#projects-button', aniSpeed, {
        color: '#000000',
        boxShadow: '0px 2px 0px #000'
    });

    var homeExit = TweenMax.to('#home-button', aniSpeed, {
        color: '#fff'
    });

    var homeShadowGone = TweenMax.to('#home-button', aniSpeed, {
        boxShadow: '0px 0px 0px #000'
    });

    var homeEnter = TweenMax.to('#home-button', aniSpeed, {
        boxShadow: '0px 2px 0px #000'
    });


    // set up scenes 
    var homeExitScene = new ScrollMagic.Scene({
        triggerElement: '#projects',
        triggerHook: projectsTriggerHook
    })
    .setTween(homeExit);

    var homeEnterScene = new ScrollMagic.Scene({
        triggerElement: '#home',
        triggerHook: 'onEnter'
    })
    .setTween(homeEnter);

    var projectsEnterScene = new ScrollMagic.Scene({
        triggerElement: '#projects',
        triggerHook: projectsTriggerHook
    })
    .setTween(projectsEnter);

    var projectsEnterScene2 = new ScrollMagic.Scene({
        triggerElement: '#projects',
        triggerHook: projectsTriggerHook
    })
    .setTween(homeShadowGone);

    controller.addScene([homeExitScene, homeEnterScene, projectsEnterScene, projectsEnterScene2]);


    // nav scrolling funcitonality
    $(document).on("click", '.page-link', function(e) {
        var id = $(this).attr('rel');

        controller.scrollTo(id);
    });


    // change menu item color when hovered over
    $('.page-link').hover(function() {
        $(this).css('color', 'black');
    }, function() {
        $(this).css('color', '');
    });
});

