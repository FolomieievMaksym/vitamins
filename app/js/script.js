"use strict";
const burger = document.querySelector(".burger"),
   // menu = document.querySelector(".menu"),
   header = document.querySelector(".header"),
   headerAction = document.querySelector(".header-action"),
   headerAside1 = document.querySelector(".header-aside_1"),
   headerAside2 = document.querySelector(".header-aside_2"),
   headerAside3 = document.querySelector(".header-aside_3"),
   headerAside4 = document.querySelector(".header-aside_4"),
   body = document.querySelector("body");

window.addEventListener("load", () => {
   function qs(element) {
      let newEl = document.querySelector(element);
      if (newEl) return newEl;
   }
   function qa(element) {
      let newEl = document.querySelectorAll(element);
      if (newEl) return newEl;
   }

   if (burger) {
      body.addEventListener("click", burgerToggle);
      function burgerToggle(e) {
         if (e.target.closest(".burger")) {
            if (burger.classList.contains("active")) {
               burger.classList.remove("active");
               header.classList.remove("active");
               headerAction.classList.remove("active");
               body.classList.remove("lock");
               headerAside1.classList.remove("active");
               headerAside2.classList.remove("active");
            } else {
               burger.classList.add("active");
               header.classList.add("active");
               headerAction.classList.add("active");
               headerAside1.classList.add("active");
               body.classList.add("lock");
               window.addEventListener("scroll", closeBurger); // Закрывает бургер при скролле в том случае, когда для Body не задан класс 'lock'
            }
         } else if (e.target.closest("#menu-shop")) {
            headerAside1.classList.remove("active");
            headerAside2.classList.add("active");
         } else if (e.target.closest("#menu-information")) {
            headerAside1.classList.remove("active");
            headerAside3.classList.add("active");
         } else if (e.target.closest("#menu-profile")) {
            e.preventDefault();
            headerAside1.classList.remove("active");
            headerAside4.classList.add("active");
         } else if (e.target.closest(".header-aside__top")) {
            e.preventDefault();
            headerAside1.classList.add("active");
            headerAside2.classList.remove("active");
            headerAside3.classList.remove("active");
            headerAside4.classList.remove("active");
         } else if (!e.target.closest(".burger")) {
            // burger.classList.remove("active");
            // header.classList.remove("active");
            // headerAction.classList.remove("active");
            // body.classList.remove("lock");
            // window.removeEventListener("scroll", closeBurger);
         }
      }
      // menu-information
      function closeBurger() {
         if (burger.classList.contains("active")) {
            //Необязательная дополнительная проверка
            burger.classList.remove("active");
            menu.classList.remove("active");
            header.classList.remove("active");
            body.classList.remove("lock");
            window.removeEventListener("scroll", closeBurger);
         }
      }
   }

   body.addEventListener("click", quiz);

   function quiz(e) {
      let steps = qa(".quiz__step");
      let backButton = qs(".quiz__footer > div");
      if (e.target.innerHTML == "Take the quiz") {
         qs(".quiz").classList.add("active");
         steps[0].classList.add("active");
         body.classList.add("lock");
      }
      if (e.target.closest(".quiz__footer > div")) {
         qs(".quiz").classList.remove("active");
         qs(".quiz__pages").innerHTML = "1/9";
         body.classList.remove("lock");
         steps.forEach((el) => {
            el.classList.remove("active");
         });
      } else if (e.target.closest(".quiz__pages")) {
         if (e.target.closest(".quiz__pages").innerHTML == "1/9") {
            steps[0].classList.remove("active");
            steps[1].classList.add("active");
            qs(".quiz__pages").innerHTML = "2/9";
         } else if (e.target.closest(".quiz__pages").innerHTML == "2/9") {
            steps[1].classList.remove("active");
            steps[2].classList.add("active");
            qs(".quiz__pages").innerHTML = "3/9";
         } else if (e.target.closest(".quiz__pages").innerHTML == "3/9") {
            steps[2].classList.remove("active");
            steps[3].classList.add("active");
            qs(".quiz__pages").innerHTML = "4/9";
         } else if (e.target.closest(".quiz__pages").innerHTML == "4/9") {
            steps[3].classList.remove("active");
            steps[4].classList.add("active");
            qs(".quiz__pages").innerHTML = "5/9";
         } else if (e.target.closest(".quiz__pages").innerHTML == "5/9") {
            steps[4].classList.remove("active");
            steps[5].classList.add("active");
            qs(".quiz__pages").innerHTML = "6/9";
         } else if (e.target.closest(".quiz__pages").innerHTML == "6/9") {
            steps[5].classList.remove("active");
            steps[6].classList.add("active");
            qs(".quiz__pages").innerHTML = "7/9";
         } else if (e.target.closest(".quiz__pages").innerHTML == "7/9") {
            steps[6].classList.remove("active");
            steps[7].classList.add("active");
            qs(".quiz__pages").innerHTML = "8/9";
         } else if (e.target.closest(".quiz__pages").innerHTML == "8/9") {
            steps[7].classList.remove("active");
            steps[8].classList.add("active");
            qs(".quiz__pages").innerHTML = "9/9";
         } else if (e.target.closest(".quiz__pages").innerHTML == "9/9") {
            steps[8].classList.remove("active");
            qs(".quiz").classList.remove("active");
            qs(".quiz__pages").innerHTML = "1/9";
            body.classList.remove("lock");
         }
      }
   }

   body.addEventListener("mousedown", borderAdd);

   function borderAdd(e) {
      if (e.target.closest(".quiz__question p")) {
         e.target.classList.add("active");
         body.addEventListener("mouseup", borderRemove);
         function borderRemove(e) {
            qa(".quiz__question p").forEach((el) => {
               el.classList.remove("active");
            });
         }
      }
   }

   //Sign-up.html
   if (qs("body.sign-up")) {
      const leftButton = qs(".left-btn"),
         rightButton = qs(".right-btn"),
         lastButton = qs(".last-button"),
         wholesaleInput = qs(".wholesale-input"),
         wholesaleHeading = qs(".wholesale-heading");

      body.addEventListener("click", switchClasses);

      function switchClasses(e) {
         if (e.target.closest(".left-btn")) {
            if (leftButton.classList.contains("disabled")) {
               leftButton.classList.remove("disabled");
               lastButton.classList.remove("disabled");
               rightButton.classList.add("disabled");
               wholesaleInput.classList.add("disabled");
               wholesaleHeading.classList.add("disabled");
            }
         } else if (e.target.closest(".right-btn")) {
            if (rightButton.classList.contains("disabled")) {
               leftButton.classList.add("disabled");
               lastButton.classList.add("disabled");
               rightButton.classList.remove("disabled");
               wholesaleInput.classList.remove("disabled");
               wholesaleHeading.classList.remove("disabled");
               const inputs = qa("input");
               if (inputs[0].value && inputs[1].value && inputs[2].value && inputs[3].value && inputs[4].value) {
                  lastButton.classList.remove("disabled");
               }
            }
         } else if (e.target.closest(".icons-row__item")) {
            body.classList.add("hide-content");
            lastButton.classList.add("disabled");
            wholesaleInput.firstElementChild.setAttribute("value", "");
            wholesaleInput.classList.remove("disabled");
            wholesaleInput.addEventListener("change", () => {
               lastButton.classList.remove("disabled");
            });
         }
      }

      if (window.innerWidth > 1441) {
         wholesaleInput.firstElementChild.setAttribute("placeholder", "Wholesale purchase permission");
      }
   }
   //Catalog.html
   if (qs("body.catalog")) {
      const swiperBanner = new Swiper(".banner__slider", {
         // loop: true,
         // centeredSlides: false,
         slideToClickedSlide: true,
         slidesPerView: 1,
         spaceBetween: 15,
         navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
         },
         pagination: {
            el: ".swiper-pagination",
            clickable: true,
         },
         breakpoints: {
            376: {
               slidesPerView: 1.2,
            },
            400: {
               slidesPerView: 1.3,
               spaceBetween: 20,
            },
            450: {
               slidesPerView: 1.4,
            },
            500: {
               // centeredSlides: true,
               slidesPerView: 1.5,
            },
            550: {
               slidesPerView: 1.6,
            },
            600: {
               slidesPerView: 1.8,
            },
            650: {
               slidesPerView: 1.9,
            },
            700: {
               slidesPerView: 2,
            },
            750: {
               slidesPerView: 2.1,
            },
            800: {
               slidesPerView: 2.2,
            },
            850: {
               slidesPerView: 2.3,
            },
            900: {
               slidesPerView: 2.4,
            },
            950: {
               slidesPerView: 2.5,
            },
            1000: {
               centeredSlides: true,
               initialSlide: 0,
               loop: true,
               slidesPerView: 1.12,
               spaceBetween: 30,
            },
            1400: {
               centeredSlides: true,
               slidesPerView: 1.28,
               spaceBetween: 50,
            },
         },
         // navigation: {
         //    nextEl: ".swiper-button-next",
         //    prevEl: ".swiper-button-prev",
         // },
         // autoplay: {
         //    delay: 4000,
         //    stopOnLastSlide: false,
         //    disableOnIteraction: false,
         // },
      });

      const swiperComments = new Swiper(".comments__slider", {
         initialSlide: 0,
         slideToClickedSlide: true,
         slidesPerView: 1.07,
         spaceBetween: 10,
         breakpoints: {
            380: {
               slidesPerView: 1.06,
            },
            400: {
               slidesPerView: 1.3,
               spaceBetween: 20,
            },
            450: {
               slidesPerView: 1.4,
            },
            500: {
               slidesPerView: 1.5,
            },
            550: {
               slidesPerView: 1.6,
            },
            600: {
               slidesPerView: 1.8,
            },
            650: {
               slidesPerView: 1.9,
            },
            700: {
               slidesPerView: 2,
            },
            750: {
               slidesPerView: 2.1,
               spaceBetween: 25,
            },
            800: {
               slidesPerView: 2.2,
            },
            850: {
               slidesPerView: 2.3,
            },
            900: {
               slidesPerView: 2.4,
            },
            950: {
               slidesPerView: 2.5,
            },
            1000: {
               slidesPerView: 2.6,
               spaceBetween: 32,
            },
            1100: {
               slidesPerView: 2.7,
               spaceBetween: 32,
            },
            1200: {
               slidesPerView: 2.8,
               spaceBetween: 32,
            },
            1300: {
               slidesPerView: 2.9,
               spaceBetween: 32,
            },
            1400: {
               slidesPerView: 3,
               spaceBetween: 32,
            },
         },
      });
   }
   //Cart.html
   if (qs(".cart")) {
      const cartDeliver = qa(".item-body__content"),
         checkbox = qa(".item-body__ok-icon");
      body.addEventListener("click", checkboxToggle);

      function checkboxToggle(e) {
         if (e.target.closest(".item-body__ok-icon")) {
            e.target.closest(".item-body__content").classList.toggle("disabled");
         } else if (e.target.closest(".cart__bottom__btn")) {
            qs(".cart__bottom").classList.add("disabled");
         } else if (e.target.closest(".item-body__icon-wrapper")) {
            e.target.closest(".cart-item ").remove();
            if (qs(".cart__items").children.length == 0) {
               qs(".cart__fix").remove();
               qs(".cart__bottom").remove();
               qs(".cart__empty").classList.add("active");
            }
         } else if (e.target.closest(".cart__close-icon")) {
            qs(".cart").classList.remove("active");
         } else if (e.target.closest(".ic-cart")) {
            qs(".cart").classList.add("active");
         }
      }
   }
});
