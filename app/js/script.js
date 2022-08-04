"use strict";
const burger = document.querySelector(".burger"),
	menu = document.querySelector(".menu"),
	header = document.querySelector(".header"),
	body = document.querySelector("body");

window.addEventListener("load", () => {
	if (burger) {
		body.addEventListener("click", burgerToggle);
		function burgerToggle(e) {
			// alert("Click") // Для проверки вызова функции кликом
			if (e.target.closest(".burger")) {
				burger.classList.toggle("active");
				menu.classList.toggle("active");
				header.classList.toggle("active");
				body.classList.toggle("lock");
				window.addEventListener("scroll", closeBurger); // Закрывает бургер при скролле в том случае, когда для Body не задан класс 'lock'
			} else if (!e.target.closest(".burger")) {
				burger.classList.remove("active");
				menu.classList.remove("active");
				header.classList.remove("active");
				body.classList.remove("lock");
				window.removeEventListener("scroll", closeBurger);
			}
		}

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

});
