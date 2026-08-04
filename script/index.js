
const toggler = document.querySelector(".togggle");
const navLinks = document.querySelector(".nav-links");

toggler.addEventListener("click", ()=>{
    toggler.classList.toggle("active");
    navLinks.classList.toggle("active");
})