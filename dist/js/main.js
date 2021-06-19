const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav__list');

navList.style.maxHeight = '0px';

menuIcon.addEventListener('click', function () {
    if (navList.style.maxHeight == '0px') navList.style.maxHeight = '200px';
    else navList.style.maxHeight = '0px';
})