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
            320: {
                slidesPerView: 1,
                spaceBetween: 5,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },


            992: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
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
            320: {
                slidesPerView: 1,
                spaceBetween: 5,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
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
            320: {
                spaceBetween: 40,
            },
            768: {
                spaceBetween: 80,
            },
            992: {
                spaceBetween: 140,
            },
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
            320: {
                slidesPerView: 1,
                spaceBetween: 5,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },


            992: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
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
            320: {
                slidesPerView: 1,
                spaceBetween: 5,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },


            992: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
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

    $(".country__show").click(function() {
        $(".country__hidden").slideToggle();
        $(".country__open-btn").toggleClass("country__open-btn--active")
    })


    // Выпадающий список стран
    const selectContent = $(".country__select .select__content");
    const selected = $(".country__select .selected");

    $(".select__content").click(function(e) {
        let tabsPath = e.target.dataset.tabsPath;

        selectHandler(tabsPath)
    })

    function selectHandler(path) {
        console.log(path)
        $(".selected").removeClass("selected--active")
        $(`.selected[data-tabs-target=${ path }]`).addClass("selected--active")
        $(".country__hidden").hide();
        $(".country__open-btn").removeClass("country__open-btn--active")
    }

    // Выбор города
    $(".header__city").click(function() {
        $(".modal-bg").show();
        $(".city").show(200)
    })
    $(".modal-bg").click(function() {
        $(".modal-bg").hide();
        $(".city").hide(200)
        $(".cart").hide(200)
    })
    $(".city__close").click(function() {
        $(".modal-bg").hide();
        $(".city").hide(200)
    })

    // Корзины
    $(".header__btn.cart-btn").click(function() {
        $(".modal-bg").show();
        $(".cart").show(200)
    })

    $(".cart__close").click(function() {
            $(".modal-bg").hide();
            $(".cart").hide(200)
        })
        // Формы заказа
    $(".cart-buy-btn").click(function() {
        $(".order").show(200);
        $(".modal-bg").hide();
        $(".cart").hide(200)
    })
    $(".order__close").click(function() {
        // $(".modal-bg").hide();
        $(".order").hide(200)
    })
    $(".change-city").click(function() {
        $(".modal-bg").show();
        $(".city").show(200)
    })

    // Смена адреса
    $(".change-address").click(function() {
        $(".modal-bg").show();
        $(".address").show(200)
    })
    $(".address__close").click(function() {
        $(".modal-bg").hide();
        $(".address").hide(200)
    })

    // Бургер меню
    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active");
        $(".nav").slideToggle();
        $(".catalog-menu").hide();
    })
    $(".catalog-open").click(function() {
        $(".catalog-menu").show(400);

    })
    $(".catalog-menu__back").click(function() {
        $(".catalog-menu").hide(400);
        $(".catalog-submenu").hide(400);
    })
    $(".catalog-menu__item").click(function() {
        $(".catalog-submenu").hide();
        $(this).children(".catalog-submenu").show(400);
    })

    // Шаги оформления заказа
    $(".step__show").click(function() {
        $(this).siblings(".step__hidden").slideToggle()
        $(this).children(".step__show-top").children(".step__btn").toggleClass("step__btn--active");
    })


    $.fn.setCursorPosition = function(pos) {
        this.each(function(index, elem) {
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                var range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        });
        return this;
    };
    $("#reg-tel").click(function() {
        $("#reg-tel").setCursorPosition(3)
    }).mask("+7 (999) 999-99-99")
    $(".tel-input").click(function() {
        $(".tel-input").setCursorPosition(3)
    }).mask("+7 (999) 999-99-99")




    // выбор самовызов - курьер
    $(".step__item-radio").click(function() {
        $(this).siblings(".step__item-radio").removeClass("step__item-radio--active")
        $(this).addClass("step__item-radio--active")
    })

    // Выбор способов оплаты
    $(".step__item-pay-method").click(function() {
        $(this).siblings(".step__item-pay-method").removeClass("step__item-pay-method--active")
        $(this).addClass("step__item-pay-method--active")
    })

    $('.step__time').each(function() {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450; // длительность анимации 

        _this.hide();
        _this.wrap('<div class="step__time"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);

        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);

        const selectList = selectHead.next('.new-select__list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                    class: 'new-select__item',
                    html: $('<span>', {
                        text: selectOption.eq(i).text()
                    })
                })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }

        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function() {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on');
                selectList.slideDown(duration);

                selectItem.on('click', function() {
                    let chooseItem = $(this).data('value');

                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text($(this).find('span').text());

                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });



});