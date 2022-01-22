var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active1");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

var pinnumberbtn = document.querySelector("#box1>button");
// var pinnumber = document.querySelector("#box1>input").innerHTML;
pinnumberbtn.addEventListener("click", function(){
  var pn = document.querySelector("#box1>input").value;
  if(pn.length == 0){
    alert("Please enter your area pincode.");
  }
  else if(pn.length != 6){
    alert("Please enter valid pincode of 6 digits.");
  }
  else if(pn.length == 6){
    window.location.href = "./retail.html";
    localStorage.setItem("pincode",JSON.stringify(pn));
  }
})
