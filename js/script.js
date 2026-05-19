const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

if(menuBtn && navLinks){

menuBtn.addEventListener("click", (e)=>{

e.stopPropagation();

navLinks.classList.toggle("show");

});

navLinks.addEventListener("click", ()=>{

navLinks.classList.remove("show");

});

document.addEventListener("click", (e)=>{

if(!menuBtn.contains(e.target) && !navLinks.contains(e.target)){

navLinks.classList.remove("show");

}

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
