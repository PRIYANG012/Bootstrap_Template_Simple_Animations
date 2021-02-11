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
});