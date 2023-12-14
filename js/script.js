/* burger */

const burger = document.getElementById("burger");
const navBlock = document.getElementById("navBlock");

burger.addEventListener("click", function () {
	navBlock.classList.toggle("nav--active"); /* включем мобильное меню при клике */
	burger.classList.toggle("burger--active"); /* изменем состояние кнопки бургера  */
	document.body.classList.toggle("stop-scroll"); /* не даем скроллить сайт при включенном мобильном меню */
});

/* modal */
const modalFormBtn = document.getElementById("modal-form");
const modal = document.getElementById("modal");

/* открытие модалки */
modalFormBtn.addEventListener("click", function () {
	modal.classList.add("modal-parent--open");
});
/* закрытие модалки  */
modal.querySelector(".modal").addEventListener("click", function (event) {
	event._isClick = true;
});
modal.addEventListener("click", function (event) {
	if (event._isClick === true) return;
	modal.classList.remove("modal-parent--open");
});
/* esc закрытие модалки  */
window.addEventListener("keydown", function (event) {
	if (event.key === "Escape") {
		modal.classList.remove("modal-parent--open");
	}
});


/* swiper gallery */
const swiper = new Swiper("#gallery", {
	loop: true,
	slidesPerView: 3,
	spaceBetween: 20,

	navigation: {
		prevEl: "#gallery-pref-btn",
		nextEl: "#gallery-next-btn",
	},
});