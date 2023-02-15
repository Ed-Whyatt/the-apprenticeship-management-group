$(document).ready(function(){
    let pc = $('#pc');
    pc.animate({left: '200px'}, 1000);

    let curveone = $('#curveone');
    curveone.animate({left: '20px'}, 1500);

    let curvetwo = $('#curvetwo');
    curvetwo.animate({left: '20px'}, 1200);

    $('#sectionOneHeading').hide('slide', {direction: 'left'});
    $('#sectionOneText').hide('slide', {direction: 'right'});
    $('#headerLogoTwo').hide('slide', {direction: 'left'});
    
    
    $(window).on('scroll',() => {
        $('#sectionOneHeading').show('slide', {direction: 'left'}, 1000);
        $('#sectionOneText').show('slide', {direction: 'right'}, 1000);
        $('#headerLogoTwo').show('slide', {direction: 'left'}, 1000);
    });
    
});
