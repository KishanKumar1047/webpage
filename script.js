let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

menu.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', ' Python programmer' , 'Backend Developer' , 'Photographer.' ],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  }) ;