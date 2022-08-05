"use strict";
const burger = document.querySelector(".burger"),
	menu = document.querySelector(".menu"),
	header = document.querySelector(".header"),
	body = document.querySelector("body");

window.addEventListener("load", () => {

	function qs(element) {
		let newEl = document.querySelector(element)
		if (newEl) return newEl
	}
	function qa(element) {
		let newEl = document.querySelectorAll(element)
		if (newEl) return newEl
	}

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

	//Sign-up.html
	if (qs('body.sign-up')) {
		const leftButton = qs('.left-btn'),
			rightButton = qs('.right-btn'),
			lastButton = qs('.last-button'),
			wholesaleInput = qs('.wholesale-input'),
			wholesaleHeading = qs('.wholesale-heading');
		console.log(leftButton);
		console.log(rightButton);

		leftButton.addEventListener('click', switchClasses)
		rightButton.addEventListener('click', switchClasses)

		function switchClasses(e) {
			if (e.target.closest('.left-btn')) {
				if (leftButton.classList.contains('disabled')) {
					console.log('Work');
					leftButton.classList.remove('disabled')
					lastButton.classList.remove('disabled')
					rightButton.classList.add('disabled')
					wholesaleInput.classList.add('disabled')
					wholesaleHeading.classList.add('disabled')
				}
			} else if (e.target.closest('.right-btn')) {
				if (rightButton.classList.contains('disabled')) {
					console.log('Work 2');
					leftButton.classList.add('disabled')
					lastButton.classList.add('disabled')
					rightButton.classList.remove('disabled')
					wholesaleInput.classList.remove('disabled')
					wholesaleHeading.classList.remove('disabled')
				}
			}
		}
	}

});
