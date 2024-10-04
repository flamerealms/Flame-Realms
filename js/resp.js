burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
rightNAV = document.querySelector(".rightNAV");
navlist = document.querySelector(".nav-list");



burger.addEventListener('click', () => {
  rightNAV.classList.toggle('v-class-resp');
  navlist.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-nav-resp');

})