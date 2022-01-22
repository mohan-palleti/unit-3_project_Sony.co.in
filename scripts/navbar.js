
// navbar sign in & log out code
var user = JSON.parse(localStorage.getItem("register"));
var system = JSON.parse(localStorage.getItem("system"));
let loggedin = document.querySelector(".my_sony_drop>p");
let signbtn = document.querySelector(".signup_dropdown>button");


if(user.length != 0 && system == "online"){
  loggedin.innerHTML = "Hi, "+user;
  signbtn.innerHTML = "Log Out";
}

signbtn.addEventListener("click", function(){
  if(signbtn.innerHTML == "Log Out"){
    localStorage.removeItem("system");
    signbtn.innerHTML = "Sign in";
    loggedin.innerHTML = "My Sony";
  }
  else if(loggedin.innerHTML == "My Sony"){
    window.location.href = "./loginpage.html";
  }
});

// search btn dropdown
// let nav_list=document.querySelector(".nav_list");
let drop_search=document.querySelector(".drop_down_search");



let searchbutton= document.querySelector("#search_sony")
searchbutton.addEventListener("click",()=>{
  
  if(drop_search.style.display==="none"){
    drop_search.style.display="block";
    drop_search.style.pointerEvents="all";
  }else{
    drop_search.style.display="none";
  }
 
});

// top menu 


let topmenu= document.querySelector(".topmenu_main_container");
let topmenu_container= document.querySelector(".topmenu_container")

let close= document.querySelector(".close_btn");
let open= document.querySelector(".open_btn");
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



