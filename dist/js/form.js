const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav__list');

navList.style.maxHeight = '0px';

menuIcon.addEventListener('click', function () {
    if (navList.style.maxHeight == '0px') navList.style.maxHeight = '200px';
    else navList.style.maxHeight = '0px';
});


//Form toggle
const loginForm = document.querySelector('#login-form');
const regForm = document.querySelector('#reg-form');
const indicator = document.querySelector('#indicator');
const login = document.querySelector('#login');
const register = document.querySelector('#signup');

register.addEventListener('click', function () {
    regForm.style.transform = 'translateX(0px)';
    loginForm.style.transform = 'translateX(0px)';
    indicator.style.transform = 'translateX(100px)';
});

login.addEventListener('click', function () {
    regForm.style.transform = 'translateX(300px)';
    loginForm.style.transform = 'translateX(300px)';
    indicator.style.transform = 'translateX(0px)';
});