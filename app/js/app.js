$(document).ready(function(){

    $('.header--burger').click(function(){
        $('.header--burger, nav').toggleClass('active')
        $('body').toggleClass('lock')
    });

    

    const elem = document.querySelector('.owl-carousel');

    let windowHeight = document.documentElement.clientHeight;
    
    let sliderHeight = elem.offsetHeight;
    
    elem.dataset.items = Math.floor(40*elem.getAttribute('data-items')/(sliderHeight / windowHeight * 100));

        let item = elem.getAttribute('data-items')

        $(".owl-carouse-head").owlCarousel({
            items: item,
            dots: false,
            nav: false,
            autoplay: true,
        })

        $(".owl-carousel--main").owlCarousel({
            items: 1,
            dots: false,
            nav: true,
            navText : ["",""],
        })

})