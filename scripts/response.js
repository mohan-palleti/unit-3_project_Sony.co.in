let nav_list=document.querySelector(".nav_list");
let right_nav=document.querySelector(".right_nav");

let navbar=document.querySelector(".navbar");

let burger= document.querySelector(".burger")
burger.addEventListener("click",()=>{
  
    right_nav.classList.toggle('v_class_nav');
    nav_list.classList.toggle('v_class_nav');
    navbar.classList.toggle('navbar_sm');
});

var slide_1 = document.querySelector(".slider-1");
var btn1= document.getElementById("btn1");
var btn2= document.getElementById("btn2");
var btn3= document.getElementById("btn3");
btn1.onclick = function()
{
    slide_1.style.transform = "translateX(0%)"
    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");

}
btn2.onclick = function()
{
    slide_1.style.transform = "translateX(-22.80%)"
    btn2.classList.add("active");
    btn1.classList.remove("active");
    btn3.classList.remove("active");
}
btn3.onclick = function()
{
    slide_1.style.transform = "translateX(-45.65%)"
    btn3.classList.add("active");
    btn2.classList.remove("active");
    btn1.classList.remove("active");
}