$(document).ready(function () {
    // image curve one hide
    let curveone = $('#curveone');
    curveone.animate({
        left: '20px'
    }, 1500);
    // image curve two hide
    let curvetwo = $('#curvetwo');
    curvetwo.animate({
        left: '20px'
    }, 1200);

    // header logo two hide
    $('#navLogoTwo').hide('slide', {direction: 'left'});

    $(window).on('scroll', () => {

        // image curve animate left to right
        let test = $('#navLogoOne').height();
        if ($(this).scrollTop() >= test) {
            curveone.animate({
                left: '40px'
            }, 1500);
            curvetwo.animate({
                left: '40px'
            }, 1200);

        };

    });

    $(window).scroll(function () {
        // nav logo swap
        if ($(document).scrollTop() > 0) {
            $('#navLogoOne').hide('slide', {
                direction: 'left'
            });
        } else {
            $('#navLogoOne').show('slide', {
                direction: 'left'
            });
        }
    });

    $(window).scroll(function () {
        // nav logo swap
        if ($(document).scrollTop() > 200) {
            $('#navLogoTwo').show('slide', {
                direction: 'left'
            });
        } else {
            $('#navLogoTwo').hide('slide', {
                direction: 'left'
            });
        }
    });

    $(window).scroll(function () {
        // bottom image show
        if ($(document).scrollTop() > 500) {
            $('#imageOne').show('slide', {
                direction: 'left'
            }, 1000);
            $('#imageTwo').show('slide', {
                direction: 'left'
            }, 1500);
            $('#imageThree').show('slide', {
                direction: 'left'
            }, 2000);
            $('#imageFour').show('slide', {
                direction: 'left'
            }, 2500);
        } else {
            // bottom image hide
            $('#imageOne').hide('slide', {
                direction: 'left'
            });
            $('#imageTwo').hide('slide', {
                direction: 'left'
            });
            $('#imageThree').hide('slide', {
                direction: 'left'
            });
            $('#imageFour').hide('slide', {
                direction: 'left'
            });
        }
    });

    
    // bottom images bounce
    $("#imageOneContainer")
        .mouseenter(function () {
            $("#imageOneContainer").animate({
                height: '160px',
                width: '220px'
            }, );
        })
        .mouseleave(function () {
            $("#imageOneContainer").animate({
                height: '150px',
                width: '200px'
            }, );
        });


    $("#imageTwoContainer")
        .mouseenter(function () {
            $("#imageTwoContainer").animate({
                height: '160px',
                width: '220px'
            }, );
        })
        .mouseleave(function () {
            $("#imageTwoContainer").animate({
                height: '150px',
                width: '200px'
            }, );
        });


    $("#imageThreeContainer")
        .mouseenter(function () {
            $("#imageThreeContainer").animate({
                height: '160px',
                width: '220px'
            }, );
        })
        .mouseleave(function () {
            $("#imageThreeContainer").animate({
                height: '150px',
                width: '200px'
            }, );
        });

    $("#imageFourContainer")
        .mouseenter(function () {
            $("#imageFourContainer").animate({
                height: '160px',
                width: '220px'
            }, );
        })
        .mouseleave(function () {
            $("#imageFourContainer").animate({
                height: '150px',
                width: '200px'
            }, );
        });
    // bottom images bounce end

});