const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const cardsContainer = document.querySelector('.cards-container');

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

const productList = [];
productList.push({
    name: 'Bike',
    price: 250,
    image: "https://cdn.shopify.com/s/files/1/0405/1117/6862/products/Islabikes-Beinn20-Small-Teal-ChildrensBike.jpg?v=1598433975",
});
productList.push({
    name: 'TV',
    price: 220,
    image: "https://i5.walmartimages.com/asr/0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg",
});
productList.push({
    name: 'Laptop',
    price: 620,
    image: "https://i5.walmartimages.com/asr/a05f40e4-35a7-4e76-8a1b-7c3c9009ef6f.9dc21396fa0a04e77f3988546ebdedf5.jpeg",
});
productList.push({
    name: 'Motorcycle',
    price: 5200,
    image: "https://cdn.shopify.com/s/files/1/0622/0660/7617/products/ZoneSGreen1.jpg?v=1652314624",
});
/*             <div class="product-card">
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                <div class="product-info">
                    <div>
                        <p>$120.00</p>
                        <p>Bike </p>  
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div> -->
            */
function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart); //Aqui le decimos que metemos la img dentro de figure.
    
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);