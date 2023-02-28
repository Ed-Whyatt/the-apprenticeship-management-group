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
    $('#twoText').hide('slide', {direction: 'left'});
    
    
    
    $(window).on('scroll',() => {
        $('#sectionOneHeading').show('slide', {direction: 'left'}, 1500);
        $('#sectionOneText').show('slide', {direction: 'right'}, 1500);

        // scroll point script
        let headerLogoTwo = $('#headerLogoTwo').height();
        if($(this).scrollTop()>=headerLogoTwo){
            $("#headerLogoTwo").fadeIn("slow");
            curveone.animate({left: '40px'}, 1500);
            curvetwo.animate({left: '40px'}, 1200);
            // console.log("True")
        } else {
            $('#headerLogoTwo').hide('slide', {direction: 'left'});
            // console.log("else")
        };

    });

    $(window).scroll(function() {
        if ($(document).scrollTop() > 1400) {
            $('#twoText').show('slide', {direction: 'left'}, 1000);
            $("#barchart").animate({
                height: '300px',
                width: '300px'
              }, "slow");
            
        }
    });

    $('#imageOne').hide('slide', {direction: 'left'});
    $('#imageTwo').hide('slide', {direction: 'left'});
    $('#imageThree').hide('slide', {direction: 'left'});
    $('#imageFour').hide('slide', {direction: 'left'});
    
    $(window).scroll(function() {
        if ($(document).scrollTop() > 2400) {
            $('#imageOne').show('slide', {direction: 'left'}, 1000);
            $('#imageTwo').show('slide', {direction: 'left'}, 2000);
            $('#imageThree').show('slide', {direction: 'left'}, 3000);
            $('#imageFour').show('slide', {direction: 'left'}, 4000);
        }
    });

});
