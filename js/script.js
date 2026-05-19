const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

if(menuBtn && navLinks){

menuBtn.addEventListener("click", ()=>{

navLinks.classList.toggle("show");

});

}


const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Message submitted successfully!");

form.reset();

});

}