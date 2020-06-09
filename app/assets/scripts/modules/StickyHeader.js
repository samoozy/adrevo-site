import throttle from 'lodash/throttle'

class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector(".header-section")
        this.browserHeight = window.innerHeight
        this.previousScrollY = window.scrollY
        this.event();
    }

    event() {
        window.addEventListener("scroll", throttle(() => this.runOnScroll(), 300));
    }

    runOnScroll() {
        // this.determineScrollDirection()

        if (window.scrollY > 60) {
            this.siteHeader.classList.add("header-section--header-dark")
        } else {
            this.siteHeader.classList.remove("header-section--header-dark")
        }
    }

    // determineScrollDirection() {
    //     if (window.scrollY > this.previousScrollY) {
    //         this.scrollDirection = 'down'
    //     } else {
    //         this.scrollDirection = 'up'
    //     }
    // }
}




export default StickyHeader;