function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector(".header-menu");
	const menuIcon = document.querySelector('.nav-icon');

	navBtn.onclick = toggleMobile;

	function toggleMobile() {
		nav.classList.toggle("header-menu__mobile--open");
        menuIcon.classList.toggle("nav-icon--active");
        document.body.classList.toggle("no-scroll");
	}
}

export default mobileNav;