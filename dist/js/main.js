const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav__list');

navList.style.maxHeight = '0px';

menuIcon.addEventListener('click', function () {
    if (navList.style.maxHeight == '0px') navList.style.maxHeight = '200px';
    else navList.style.maxHeight = '0px';
});


//Product Image
const productImage = document.querySelector('#product-img');
const smallImage = document.querySelectorAll('.small-img');

smallImage[0].addEventListener('click', function () {
    productImage.src = smallImage[0].src;
});

smallImage[1].addEventListener('click', function () {
    productImage.src = smallImage[1].src;
});

smallImage[2].addEventListener('click', function () {
    productImage.src = smallImage[2].src;
});

smallImage[3].addEventListener('click', function () {
    productImage.src = smallImage[3].src;
});