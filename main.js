burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar-class')
myname = document.querySelector('.name')
rightnav = document.querySelector('.nav-class')

burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-resp');
    myname.classList.toggle('v-class-resp');
    navbar.classList.toggle('nav-height-resp');
})