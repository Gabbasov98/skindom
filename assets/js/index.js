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


    // Реализация табов
    const tabsBtn = $(".tabs__item");
    const tabsContent = $(".tabs__content");

    $(".tabs__item").click(function(e) {
        let tabsPath = e.target.dataset.tabsPath;
        tabsHandler(tabsPath);
    })

    // $(".tabs__filter").click(function() {
    //     $(".mob-hide").show();
    // })

    function tabsHandler(path) {

        $.each(tabsBtn, function(index, value) {
                $(value).removeClass("tabs__item--active")
                $(`.tabs__item[data-tabs-path=${ path }]`).addClass("tabs__item--active")
            })
            // if ($(window).width() < 768) {
            //     $(".tabs__item").addClass("mob-hide")
            //     $(".tabs__item--active").removeClass("mob-hide")
            //     $(".mob-hide").hide();
            // }
        $.each(tabsContent, function(index, value) {
            $(value).removeClass("tabs__content--active")
            $(`.tabs__content[data-tabs-target=${ path }]`).addClass("tabs__content--active")
        })
    }

    let favoriteItems = $(".favorite__items");
    if (favoriteItems.length > 0) {
        $(".favorite__empty").hide();

    } else {
        $(".favorite__empty").show();
    }
});