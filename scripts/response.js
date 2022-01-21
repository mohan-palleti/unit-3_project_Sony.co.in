let nav_list=document.querySelector(".nav_list");
let right_nav=document.querySelector(".right_nav");

let navbar=document.querySelector(".navbar");

let burger= document.querySelector(".burger")
burger.addEventListener("click",()=>{
  
    right_nav.classList.toggle('v_class_nav');
    nav_list.classList.toggle('v_class_nav');
    navbar.classList.toggle('navbar_sm');
});