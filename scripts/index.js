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


var slide_2 = document.querySelector(".slider-2");
var btn4= document.getElementById("btn4");
var btn5= document.getElementById("btn5");
var btn6= document.getElementById("btn6");
btn4.onclick = function()
{
    slide_2.style.transform = "translateX(0%)"
    btn4.classList.add("active");
    btn5.classList.remove("active");
    btn6.classList.remove("active");

}
btn5.onclick = function()
{
    slide_2.style.transform = "translateX(-33.25%)"
    btn5.classList.add("active");
    btn4.classList.remove("active");
    btn6.classList.remove("active");
}
btn6.onclick = function()
{
    slide_2.style.transform = "translateX(-66.55%)"
    btn6.classList.add("active");
    btn5.classList.remove("active");
    btn4.classList.remove("active");
}