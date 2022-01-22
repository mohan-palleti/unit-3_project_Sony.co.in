// search btn dropdown
// let nav_list=document.querySelector(".nav_list");
let drop_search=document.querySelector(".drop_down_search");



let searchbutton= document.querySelector("#search_sony")
searchbutton.addEventListener("click",()=>{
  
    if(drop_search.style.display==="none"){
        drop_search.style.display="block"
        drop_search.style.pointerEvents="all";
    }else{
        drop_search.style.display="none"
    }
 
});

// top menu 


let topmenu= document.querySelector(".topmenu_main_container");
let topmenu_container= document.querySelector(".topmenu_container")

let close= document.querySelector(".close_btn")
let open= document.querySelector(".open_btn")
close.addEventListener("click",()=>{
  console.log("close")
    topmenu.classList.toggle('topmenu_co');
    topmenu_container.classList.toggle('o_class_top');
  
});
open.addEventListener("click",()=>{
  console.log("open")
    topmenu.classList.toggle('topmenu_co');
    topmenu_container.classList.toggle('o_class_top');
});


//burger menu
let nav_list=document.querySelector(".nav_list");
let right_nav=document.querySelector(".right_nav");

let navbar=document.querySelector(".navbar");

let burger= document.querySelector(".burger")
burger.addEventListener("click",()=>{
  
    right_nav.classList.toggle('v_class_nav');
    nav_list.classList.toggle('v_class_nav');
    navbar.classList.toggle('navbar_sm');
});