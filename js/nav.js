$(document).ready(function () {

    $('.sub_mn_area').hide();
    let key = true;
    console.log(key);



    $('#header .nav').mouseenter(function () {
        if (key == true) {
            key = false;
            console.log(key);
            $('.sub_mn_area').slideDown(250);
            // $('.sub_mn_nav>ul').show().css({ height: '0' }).animate({ height: '250px' });
        }


    });



    $('.sub_mn_area').mouseleave(function () {
        key = true;
        console.log(key);
        $(this).stop().css({ height: '250px' }).animate({ height: '0' });
        $('.sub_mn_nav').stop().slideUp(250);
        // $('.sub_mn_nav').find('ul').css({ height: '250px' }).animate({ height: '0' });
        // $('.sub_mn_nav').hide();



    });


    // $('.sub_mn_nav>ul').mouseleave(function () {
    //     key = true;
    //     console.log(key);
    //     $(this).css({ height: '250px' }).animate({ height: '0' });
    // })





    // $('.sub_mn_nav').hover(
    //     function () {
    //         $(this).find('li').addClass('on');
    //     },
    //     function () {
    //         $(this).find('li').removeClass('on');
    //     }
    // )



})