$(document).ready(function() {

    //메뉴 마우스오버 효과
    $('.nav > ul > li').mouseover(function() {
        $(this).find('ul.subNav').stop().slideDown()
    });

    $('.nav > ul > li').mouseout(function() {
        $(this).find('ul.subNav').stop().slideUp()
    });


    

});