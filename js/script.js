const header = document.querySelector('.header');
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const sidebar = document.querySelector('.sidebar');
const sidebarBurger = document.querySelector('.sidebar__burger');
const content = document.querySelector('.content');

const headerBurgerLive = document.getElementsByClassName('header__burger');
const sidebarBurgerLive = document.getElementsByClassName('sidebar__burger');


headerBurger.addEventListener('click', function(e) {  
    headerBurger.classList.toggle('active');
    sidebarBurger.classList.toggle('active');
    setTimeout(function() {
        headerMenu.classList.toggle('active');
    }, 150);
    if (headerMenu.closest('.header')) {
        sidebar.append(headerMenu);
    } else {
        header.append(headerMenu);
    }
});

content.addEventListener('click', function(e) {
    console.log(headerBurgerLive[0])
    headerBurgerLive[0].classList.remove('active');
    sidebarBurgerLive[0].classList.remove('active');
})

const incluted = document.querySelector('.incluted')

incluted.addEventListener('submit', function(event) {
    event.preventDefault();
})



const emailIncluted = document.getElementById('email_incluted');
const passwordIncluted = document.getElementById('password_incluted');
const emailRegistration = document.getElementById('email_registration');
const passwordRegistration = document.getElementById('password_registration');
const passwordRegistrationConfirm =document.getElementById('password_registration_confirm');
const registrationSignIn = document.querySelector('.registration__signIn');
const registration = document.querySelector('.registration');
const registrationItem = document.querySelector('.registration__item');

const divInputErrorMin8 = document.createElement('div');
divInputErrorMin8.classList.add('redError');
divInputErrorMin8.classList.add('min8');
divInputErrorMin8.innerHTML = `<p>Пароль содержит меньше 8 символов</p>`

const divInputErrorConfirm = document.createElement('div');
divInputErrorConfirm.classList.add('redError');
divInputErrorConfirm.classList.add('confirmError');
divInputErrorConfirm.innerHTML = `<p>Пароли не совпадают</p>`

const min8 = document.getElementsByClassName('min8');
const confirmError = document.getElementsByClassName('confirmError');
const emailError = document.getElementsByClassName('emailError');



registration.addEventListener('submit', function(event) {
    console.log('Форма отправляется...');
    if (!emailRegistration.value.includes('@')) {
        console.log(document.getElementsByClassName('emailError'))
        console.log(document.getElementsByClassName('emailError').length)
        if (document.getElementsByClassName('emailError').length > 0) {
            emailError[0].remove();
            console.log(emailRegistration.style.marginBottom)
        }
        emailRegistration.parentElement.insertAdjacentHTML(
            "beforeend",
            `<div class="emailError redError">
                <p>Введите email</p>
            </div>`
        );
        emailRegistration.style.marginBottom = "20px";
        event.preventDefault();
    }

    if (emailRegistration.value.includes('@')) {
        console.log('yes')
        console.log(emailError)
        emailError[0].remove();
        emailRegistration.style.marginBottom = passwordIncluted.style.marginBottom;
    }

});

registration.addEventListener('submit', function(event) {
    if (passwordRegistration.value.length < 8) {
        console.log('Error password');
        passwordRegistration.after(divInputErrorMin8)
        passwordRegistration.style.marginBottom = "20px";
        event.preventDefault();
    } else {
        min8[0].remove();
        passwordRegistration.style.marginBottom = passwordIncluted.style.marginBottom;
    }
});
registration.addEventListener('submit', function(event) {
    if (passwordRegistrationConfirm.value !== passwordRegistration.value) {
        console.log('Error password confirm');
        passwordRegistrationConfirm.after(divInputErrorConfirm);
        passwordRegistrationConfirm.style.marginBottom = "20px";
        event.preventDefault();
    } else {
        confirmError[0].remove();
        passwordRegistrationConfirm.style.marginBottom = passwordIncluted.style.marginBottom;
    }

});












