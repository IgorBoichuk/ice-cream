// burger
(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

	menuBtnRef.addEventListener("click", () => {
		document.body.classList.toggle("hidden");
		// document.querySelector(".order").classList.toggle("block-none");
		// console.log("click");
		document.querySelector(".order").classList.toggle("block-none");
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

		menuBtnRef.classList.toggle("is-open");

    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})(); 