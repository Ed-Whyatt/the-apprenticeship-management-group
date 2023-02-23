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
        $('#sectionOneHeading').show('slide', {direction: 'left'}, 1500);
        $('#sectionOneText').show('slide', {direction: 'right'}, 1500);

        // scroll point script
        let headerLogoTwo = $('#headerLogoTwo').height();
        if($(this).scrollTop()>=headerLogoTwo){
            $("#headerLogoTwo").fadeIn("slow");
            curveone.animate({left: '80px'}, 1500);
            curvetwo.animate({left: '80px'}, 1200);
            
            // console.log("True")
        } else {
            $('#headerLogoTwo').hide('slide', {direction: 'left'});
            console.log("else")
        };

    });
    

    // var scrollPosition = $("body, html").scrollTop()
    // if (scrollPosition == 0){
    //     console.log("True")
    // };


});
