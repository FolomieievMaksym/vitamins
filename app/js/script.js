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
      if (e.target.innerHTML == "Take the quiz") {
         qs(".quiz").classList.add("active");
         body.classList.add("lock");
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
               if (
                  inputs[0].value &&
                  inputs[1].value &&
                  inputs[2].value &&
                  inputs[3].value &&
                  inputs[4].value
               ) {
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
         wholesaleInput.firstElementChild.setAttribute(
            "placeholder",
            "Wholesale purchase permission"
         );
      }
   }
});
