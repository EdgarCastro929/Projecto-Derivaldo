class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
        this.handleDropdownClick = this.handleDropdownClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    // ===== NOVO: Controla submenus no mobile =====
    handleDropdownClick(event) {
        const toggle = event.currentTarget;
        const parent = toggle.closest('.dropdown');
        const content = parent.querySelector('.dropdown-content');
        
        if (content) {
            content.classList.toggle('open');
        }
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    // ===== NOVO: Adiciona eventos para submenus no mobile =====
    addDropdownEvents(){
        const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', this.handleDropdownClick);
        });
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
            this.addDropdownEvents();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    "#mobile-menu",
    ".nav-list",
    ".nav-list a, .dropdown-content a"
);

mobileNavbar.init();