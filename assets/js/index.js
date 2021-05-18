function sliderNew() {
    var swiper = new Swiper('.new .swiper-container', {
        speed: 800,
        slidesPerView: 4,
        spaceBetween: 50,
        navigation: {
            nextEl: '.new .swiper-button-next',
            prevEl: '.new .swiper-button-prev',
        },
        breakpoints: {
            // 320: {
            //     slidesPerView: 1,
            //     spaceBetween: 120
            // },
            768: {},
            1200: {},
        }
    })
}

function sliderRecomend() {
    var swiper = new Swiper('.recomend .swiper-container', {
        speed: 800,
        slidesPerView: 4,
        spaceBetween: 50,
        navigation: {
            nextEl: '.recomend .swiper-button-next',
            prevEl: '.recomend .swiper-button-prev',
        },
        breakpoints: {
            // 320: {
            //     slidesPerView: 1,
            //     spaceBetween: 120
            // },
            768: {},
            1200: {},
        }
    })
}

function sliderSale() {
    var swiper = new Swiper('.sale .swiper-container', {
        speed: 800,
        slidesPerView: "auto",
        spaceBetween: 140,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.sale .swiper-button-next',
            prevEl: '.sale .swiper-button-prev',
        },
        breakpoints: {
            // 320: {
            //     slidesPerView: 1,
            //     spaceBetween: 120
            // },
            768: {},
            1200: {},
        }
    })
}

function sliderInterest() {
    var swiper = new Swiper('.interest .swiper-container', {
        speed: 800,
        slidesPerView: 4,
        spaceBetween: 50,
        navigation: {
            nextEl: '.interest .swiper-button-next',
            prevEl: '.interest .swiper-button-prev',
        },
        breakpoints: {
            // 320: {
            //     slidesPerView: 1,
            //     spaceBetween: 120
            // },
            768: {},
            1200: {},
        }
    })
}

function sliderSame() {
    var swiper = new Swiper('.same .swiper-container', {
        speed: 800,
        slidesPerView: 4,
        spaceBetween: 50,
        navigation: {
            nextEl: '.same .swiper-button-next',
            prevEl: '.same .swiper-button-prev',
        },
        breakpoints: {
            // 320: {
            //     slidesPerView: 1,
            //     spaceBetween: 120
            // },
            768: {},
            1200: {},
        }
    })
}

$(document).ready(function() {
    sliderNew()
    sliderSale()
    sliderRecomend()
    sliderInterest()
    sliderSame()
});