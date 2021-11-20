$(document).ready(function() {

    //메뉴 마우스오버 효과
    $('.nav > ul > li').mouseover(function() {
        $(this).find('ul.subNav').stop().slideDown()
    });

    $('.nav > ul > li').mouseout(function() {
        $(this).find('ul.subNav').stop().slideUp()
    });


    //롤링 슬라이드 배너
    let currentIndex = 0;
    let slideCount = $('.bannerImg').length - 1;

    setInterval(function() {
        if(currentIndex < slideCount) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }

        let slidePosition = currentIndex * (-100) + 'vw';
        $('.banner').animate({left: slidePosition}, 400);
        console.log(slidePosition);
    }, 3000);

});
