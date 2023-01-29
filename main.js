const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive'); 
    if (!isAsideClosed) { //si el .product-detail esta abierto 
        aside.classList.add('inactive'); //cerrar .product-detail
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive'); 

    if (!isAsideClosed) { //si el .product-detail esta abierto 
        aside.classList.add('inactive'); //cerrar .product-detail
    }
    mobileMenu.classList.toggle('inactive'); //ponerle/quitarle la clase inactive a .mobile-menu
}

function toggleCarAside() {
    //aqui estamos asignando la const isMobileClosed cuando nuestro mobileMenu contiene la clase 'inactive' es decir cuando esta cerrado el .mobile-menu
    const isMobileMenuClosed =      mobileMenu.classList.contains('inactive'); 

    //aqui estamos asignando la const isAsideClosed cuando nuestro aside contiene la clase 'inactive' es decir cuando esta cerrado el .product-detail
    //const isAsideClosed = aside.classList.contains('inactive');


    if (!isMobileMenuClosed) { //si el .mobile-menu esta abierto 
        mobileMenu.classList.add('inactive'); //cerrar .mobile-menu
    }

    aside.classList.toggle('inactive'); //ponerle/quitarle la clase inactive a .product-detail

    
}