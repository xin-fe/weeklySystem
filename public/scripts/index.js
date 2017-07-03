console.log('index主页');


var swiper = new Swiper('.swiper-container', {
    loop:true,
    speed:1000,
    grabCursor:true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    centeredSlides: true,
    autoplay: 10000,
    autoplayDisableOnInteraction: false,
    onSlideChangeEnd:function(swiper) {
        $('.swiper-slide-active a').addClass('active')
        $('.swiper-slide-active p').addClass('active')
    },
    onSlideChangeStart:function() {
        $('.swiper-slide a').removeClass('active');
        $('.swiper-slide p').removeClass('active');
    }
});

var winHeight = 0
function windowHeight () {
    //获取窗口高度
    if (window.innerHeight)
        winHeight = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight))
        winHeight = document.body.clientHeight;
    //通过深入Document内部对body进行检测，获取窗口大小
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
    {
        winHeight = document.documentElement.clientHeight;
        winWidth = document.documentElement.clientWidth;
    }
}

windowHeight();
window.onresize = windowHeight;
// 监听窗口滚动；
$(window).scroll(function(event) {
    
    if(window.scrollY > winHeight-113) {
        $('.navbar').css('background','#323C46');        
    }
    if(window.scrollY < winHeight-113) {
        $('.navbar').css('background','none');
    }
})



