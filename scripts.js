/*======== TOGGLE MOBILE NAV MENU ========*/
const mobileMenu = document.getElementById('mobile-nav-menu'), menuButton = document.getElementById('menu-button'), menuIcon = document.getElementById('menu-icon');

function toggleMenu() {
    // mobileMenu.classList.toggle('show');
    if (mobileMenu.classList.contains('closed')) {
        mobileMenu.style.height = "10.25rem";
        menuIcon.innerHTML = 'close';
        mobileMenu.classList.replace('closed', 'open');
    } else if (mobileMenu.classList.contains('open')) {
        mobileMenu.style.height = "0";
        menuIcon.innerHTML = 'menu';
        mobileMenu.classList.replace('open', 'closed');
    }
}

/*======== CLOSE MENU ========*/
const navLink = document.querySelectorAll('.mobile-nav-link');

function linkAction(){toggleMenu();}
