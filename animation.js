$(document).ready(function(){
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change')
    });


    $(window).scroll(function(){
        let position =$(this).scrollTop();
        if(position>=200)
        {
            $('.nav-menu-custom').addClass('custom-navbar');
        }
        else{
            $('.nav-menu-custom').removeClass('custom-navbar');
        }
    })


    $(window).scroll(function(){
        let position =$(this).scrollTop();
        if(position>=650)
        {
            $('.anim-img').addClass('fromLeft');
            $('.mission-text').addClass('fromRight');

        }
        else{
            $('.anim-img').removeClass('fromLeft');

            $('.mission-text').removeClass('fromRight');
        }
    })
});