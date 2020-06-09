class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".menu-icon")
        this.menuContent = document.querySelector(".menu-content")
        this.hamburgerTop = document.querySelector(".menu-icon__hamburger-top")
        this.hamburgerMiddle = document.querySelector(".menu-icon__hamburger-middle")
        this.hamburgerBottom = document.querySelector(".menu-icon__hamburger-bottom")
        this.event()
    }

    event() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
    }

    toggleTheMenu() {
        this.menuContent.classList.toggle("menu-content--expand");
        this.hamburgerTop.classList.toggle("menu-icon--close-top");
        this.hamburgerMiddle.classList.toggle("menu-icon--close-middle");
        this.hamburgerBottom.classList.toggle("menu-icon--close-bottom");
    }
}

export default MobileMenu;