var arr = JSON.parse(localStorage.getItem("products")) || [];
get();

async function get() {
  try {
    let response = await fetch(`http://127.0.0.1:5000/api/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    console.log(data);
    appendproduct(data);
    localStorage.setItem("products",JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
}
let getdata = document.getElementById("getdata");

function appendproduct(data) {
  getdata.innerHTML = "";
  let pLength = document.querySelector(".pLength");
  pLength.innerHTML = data.length + " Products";
  pLength.style.fontWeight = "bold";
  data.map(function(ele){
    let main = document.createElement("div");
    main.setAttribute("id", "main");

    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("id","imgDiv");

    let img = document.createElement("img");
    img.setAttribute("id", "img");
    img.src = ele.Image;
    imgDiv.append(img);

    let div1 = document.createElement("div");
    div1.setAttribute("id", "div1");
    var head = "";
    for (var x in ele.tv_type) {
      if (ele.tv_type[x] == true) {
        var a = x.split("");
        for(var i=0; i<a.length; i++){
          if(a[i] == "_"){
            a[i] = " ";
          }
        } 
        a = a.join("");
        head = head + a + " | ";
      }
    }
    div1.append(head);
    let div2 = document.createElement("div");
    div2.setAttribute("id", "div2");
    let desc = document.createElement("h4");
    desc.innerHTML = "DESCRIPTION  :" + ele.description;
    div2.append(desc);
    let div3 = document.createElement("div");
    div3.setAttribute("id", "div3");
    let resolution = document.createElement("h4");
    resolution.innerHTML = "RESOLUTION  :" + ele.resolution;
    div3.append(resolution);
    let div4 = document.createElement("div");
    div4.setAttribute("id", "div4");
    let sizetext = document.createElement("h4");
    sizetext.innerText = "SIZE : ";
    let size = document.createElement("h4");
    size.setAttribute("class","size");
    let s = "";
    for (var x in ele.size) {
      if (ele.size[x] == true) {
        s = s + x + " ch | ";
      }
    }
    size.textContent = " "+s;
    div4.append(sizetext,size);
    let div5 = document.createElement("div");
    div5.setAttribute("id", "div5");
    let model = document.createElement("h4");
    model.innerHTML = "MODEL NO  :" + ele.model;
    div5.append(model);
    let div6 = document.createElement("div");
    div6.setAttribute("id", "div6");
    let inclu = document.createElement("p");
    inclu.innerText = "(incl. of all taxes)";
    let price = document.createElement("h4");
    price.innerHTML = "MRP RS. " + ele.price + "/- Only";
    div6.append(price, inclu);
    let div7 = document.createElement("div");
    div7.setAttribute("id", "div7");
    let button = document.createElement("button");
    button.innerText = "BUY";
    div7.append(button);

    button.addEventListener("click", function(){
      window.open(ele.buy,'_blank');
    });
    // let div8 = document.createElement("div");
    // div8.setAttribute("id", "div8");
    // let sizeop = document.createElement("select");
    // let option1 = document.createElement("option");

    // let option2 = document.createElement("option");

    // let option3 = document.createElement("option");

    // let option4 = document.createElement("option");

    // var arr = [option1, option2, option3, option4];
    // let op = 0;
    // for (var x in ele.size) {
    //   if (ele.size[x] == true) {
    //     arr[op].append(x + "ch");
    //     op++;
    //   }
    // }

    // sizeop.append(option1, option2, option3, option4);

    // div8.append(sizeop);

    main.append(imgDiv, div5, div3, div1, div4, div2, div6, div7);

    getdata.append(main);
  });
}

var filterBtn = document.querySelector(".filterBtn");
var fDiv = document.querySelector("#fDiv");


filterBtn.addEventListener("click",function(){
  if(fDiv.style.opacity == 0){
    filterBtn.style.backgroundColor = "#2f353d";
    fDiv.style.opacity = 1;
    fDiv.style.height = "300px";
  }
  else{
    filterBtn.style.backgroundColor = "orangered";
    fDiv.style.opacity = 0;
    fDiv.style.height = "0px";
  }
})

let filterDiv = document.querySelector("#filterDiv");

let tel1 = document.querySelector("#filterDiv>div:nth-child(1)");
let oled = document.querySelector("#filterDiv>div:nth-child(2)");
let farr = document.querySelector("#filterDiv>div:nth-child(3)");
let aled = document.querySelector("#filterDiv>div:nth-child(4)");
let gtv = document.querySelector("#filterDiv>div:nth-child(5)");
let head = document.querySelector("#filterDiv>div:nth-child(6)");
let mp3p = document.querySelector("#filterDiv>div:nth-child(7)");

let p1 = document.querySelector("#filterDiv>div:nth-child(1)>p");
let p2 = document.querySelector("#filterDiv>div:nth-child(2)>p");
let p3 = document.querySelector("#filterDiv>div:nth-child(3)>p");
let p4 = document.querySelector("#filterDiv>div:nth-child(4)>p");
let p5 = document.querySelector("#filterDiv>div:nth-child(5)>p");
let p6 = document.querySelector("#filterDiv>div:nth-child(6)>p");

tel1.style.backgroundColor = "white";
p1.style.color = "orangered";
// appendproduct(arr);

tel1.addEventListener("click", function(){
  getdata.innerHTML = "";
  tel1.style.backgroundColor = "white";
  p1.style.color = "orangered";
  oled.style.backgroundColor = "rgb(228, 231, 235)";
  p2.style.color = "black";
  farr.style.backgroundColor = "rgb(228, 231, 235)";
  p3.style.color = "black";
  aled.style.backgroundColor = "rgb(228, 231, 235)";
  p4.style.color = "black";
  gtv.style.backgroundColor = "rgb(228, 231, 235)";
  p5.style.color = "black";
  head.style.backgroundColor = "rgb(228, 231, 235)";
  p6.style.color = "black";

  appendproduct(arr);
})

oled.addEventListener('click',function(){
  getdata.innerHTML = "";
  tel1.style.backgroundColor = "rgb(228, 231, 235)";
  p1.style.color = "black";
  oled.style.backgroundColor = "white";
  p2.style.color = "orangered";
  farr.style.backgroundColor = "rgb(228, 231, 235)";
  p3.style.color = "black";
  aled.style.backgroundColor = "rgb(228, 231, 235)";
  p4.style.color = "black";
  gtv.style.backgroundColor = "rgb(228, 231, 235)";
  p5.style.color = "black";
  head.style.backgroundColor = "rgb(228, 231, 235)";
  p6.style.color = "black";

  var oledarr = [];
  arr.map(function(ele){
    if(ele.tv_type.OLED == true){
      oledarr.push(ele);
    }
  });

  appendproduct(oledarr);
});

farr.addEventListener('click',function(){
  getdata.innerHTML = "";
  tel1.style.backgroundColor = "rgb(228, 231, 235)";
  p1.style.color = "black";
  oled.style.backgroundColor = "rgb(228, 231, 235)";
  p2.style.color = "black";
  farr.style.backgroundColor = "white";
  p3.style.color = "orangered";
  aled.style.backgroundColor = "rgb(228, 231, 235)";
  p4.style.color = "black";
  gtv.style.backgroundColor = "rgb(228, 231, 235)";
  p5.style.color = "black";
  head.style.backgroundColor = "rgb(228, 231, 235)";
  p6.style.color = "black";

  var farrarr = [];
  arr.map(function(ele){
    if(ele.tv_type.Full_Array_LED == true){
      farrarr.push(ele);
    }
  });

  appendproduct(farrarr);
});

aled.addEventListener('click',function(){
  getdata.innerHTML = "";
  tel1.style.backgroundColor = "rgb(228, 231, 235)";
  p1.style.color = "black";
  oled.style.backgroundColor = "rgb(228, 231, 235)";
  p2.style.color = "black";
  farr.style.backgroundColor = "rgb(228, 231, 235)";
  p3.style.color = "black";
  aled.style.backgroundColor = "white";
  p4.style.color = "orangered";
  gtv.style.backgroundColor = "rgb(228, 231, 235)";
  p5.style.color = "black";
  head.style.backgroundColor = "rgb(228, 231, 235)";
  p6.style.color = "black";

  var aledarr = [];
  arr.map(function(ele){
    if(ele.tv_type.LED_Display == true){
      aledarr.push(ele);
    }
  });

  appendproduct(aledarr);
});

gtv.addEventListener('click',function(){
  getdata.innerHTML = "";
  tel1.style.backgroundColor = "rgb(228, 231, 235)";
  p1.style.color = "black";
  oled.style.backgroundColor = "rgb(228, 231, 235)";
  p2.style.color = "black";
  farr.style.backgroundColor = "rgb(228, 231, 235)";
  p3.style.color = "black";
  aled.style.backgroundColor = "rgb(228, 231, 235)";
  p4.style.color = "black";
  gtv.style.backgroundColor = "white";
  p5.style.color = "orangered";
  head.style.backgroundColor = "rgb(228, 231, 235)";
  p6.style.color = "black";

  var gtvarr = [];
  arr.map(function(ele){
    if(ele.tv_type.Google_tv == true){
      gtvarr.push(ele);
    }
  });
  appendproduct(gtvarr);
});

let fScreenDiv = document.querySelector("#fScreenDiv");
let screenbtn1 = document.querySelector("#less50");
let screenbtn2 = document.querySelector("#g51-60");
let screenbtn3 = document.querySelector("#g61-70");
let screenbtn4 = document.querySelector("#g71");

screenbtn1.addEventListener("click",function(){
  getdata.innerHTML = "";

  if(screenbtn1.style.color == "white"){
    screenbtn1.style.backgroundColor = "white";
    screenbtn1.style.color = "black";
    appendproduct(arr);
  }
  else{  
    screenbtn1.style.backgroundColor = "#2f353d";
    screenbtn1.style.color = "white";
    screenbtn2.style.backgroundColor = "white";
    screenbtn2.style.color = "black";
    screenbtn3.style.backgroundColor = "white";
    screenbtn3.style.color = "black";
    screenbtn4.style.backgroundColor = "white";
    screenbtn4.style.color = "black";

    var screen1arr = [];
    arr.map(function(ele){
      var a = ele.size;
      var s = Object.values(a);
      if(s[0] == true || s[1] == true || s[2] == true){
        if(s[3] == false && s[4] == false && s[5] == false && s[6] == false){
          screen1arr.push(ele);
        }
      }
    });
    appendproduct(screen1arr);
  }
});

screenbtn2.addEventListener("click",function(){
  getdata.innerHTML = "";

  if(screenbtn2.style.color == "white"){
    screenbtn2.style.backgroundColor = "white";
    screenbtn2.style.color = "black";
    appendproduct(arr);
  }
  else{
    screenbtn1.style.backgroundColor = "white";
    screenbtn1.style.color = "black";
    screenbtn2.style.backgroundColor = "#2f353d";
    screenbtn2.style.color = "white";
    screenbtn3.style.backgroundColor = "white";
    screenbtn3.style.color = "black";
    screenbtn4.style.backgroundColor = "white";
    screenbtn4.style.color = "black";

    var screen2arr = [];
    arr.map(function(ele){
      var a = ele.size;
      var s = Object.values(a);
      if(s[3] == true){
        screen2arr.push(ele);
      }
    });
    appendproduct(screen2arr);
  }
});

screenbtn3.addEventListener("click",function(){
  getdata.innerHTML = "";

  if(screenbtn3.style.color == "white"){
    screenbtn3.style.backgroundColor = "white";
    screenbtn3.style.color = "black";
    appendproduct(arr);
  }
  else{
    screenbtn1.style.backgroundColor = "white";
    screenbtn1.style.color = "black";
    screenbtn2.style.backgroundColor = "white";
    screenbtn2.style.color = "black";
    screenbtn3.style.backgroundColor = "#2f353d";
    screenbtn3.style.color = "white";
    screenbtn4.style.backgroundColor = "white";
    screenbtn4.style.color = "black";

    var screen3arr = [];
    arr.map(function(ele){
      var a = ele.size;
      var s = Object.values(a);
      if(s[4] == true){
        screen3arr.push(ele);
      }
    });
    appendproduct(screen3arr);
  }
});

screenbtn4.addEventListener("click",function(){
  getdata.innerHTML = "";

  if(screenbtn4.style.color == "white"){
    screenbtn4.style.backgroundColor = "white";
    screenbtn4.style.color = "black";
    appendproduct(arr);
  }
  else{
    screenbtn1.style.backgroundColor = "white";
    screenbtn1.style.color = "black";
    screenbtn2.style.backgroundColor = "white";
    screenbtn2.style.color = "black";
    screenbtn3.style.backgroundColor = "white";
    screenbtn3.style.color = "black";
    screenbtn4.style.backgroundColor = "#2f353d";
    screenbtn4.style.color = "white";

    var screen4arr = [];
    arr.map(function(ele){
      var a = ele.size;
      var s = Object.values(a);
      if(s[5] == true){
        screen4arr.push(ele);
      }
    });
    appendproduct(screen4arr);
  }
});

let rescheck1 = document.querySelector("#res8k");
let rescheck2 = document.querySelector("#res4k");
let rescheck3 = document.querySelector("#reshd");

rescheck1.addEventListener("change", function(){
  getdata.innerHTML = "";
  if(this.checked){
    var res8karr = [];
    arr.map(function(ele){
      if(ele.resolution == "8KHDR"){
        res8karr.push(ele);
      }
    });
    appendproduct(res8karr);
  }
  else{
    appendproduct(arr);
  }
});

rescheck2.addEventListener("change", function(){
  getdata.innerHTML = "";
  if(this.checked){
    var res4karr = [];
    arr.map(function(ele){
      if(ele.resolution == "4KHDR"){
        res4karr.push(ele);
      }
    });
    appendproduct(res4karr);
  }
  else{
    appendproduct(arr);
  }
});

rescheck3.addEventListener("change", function(){
  getdata.innerHTML = "";
  if(this.checked){
    var reshdarr = [];
    arr.map(function(ele){
      if(ele.resolution == "FULL_HDR"){
        reshdarr.push(ele);
      }
    });
    appendproduct(reshdarr);
  }
  else{
    appendproduct(arr);
  }
});

let type1 = document.querySelector("#typeoled");
let type2 = document.querySelector("#typefullarr");
let type3 = document.querySelector("#typeled");
let type4 = document.querySelector("#typesmart");
let type5 = document.querySelector("#typebravia");

type1.addEventListener("change", function(){
  getdata.innerHTML = "";
  if(this.checked){
    var oledarr = [];
    arr.map(function(ele){
      if(ele.tv_type.OLED == true){
        oledarr.push(ele);
      }
    });
    appendproduct(oledarr);
  }
  else{
    appendproduct(arr);
  }
});

type2.addEventListener("change", function(){
  getdata.innerHTML = "";
  if(this.checked){
    var farrarr = [];
    arr.map(function(ele){
      if(ele.tv_type.Full_Array_LED == true){
        farrarr.push(ele);
      }
    });

    appendproduct(farrarr);
  }
  else{
    appendproduct(arr);
  }
});

type3.addEventListener("change", function(){
  getdata.innerHTML = "";
  if(this.checked){
    var aledarr = [];
    arr.map(function(ele){
      if(ele.tv_type.LED_Display == true){
        aledarr.push(ele);
      }
    });

    appendproduct(aledarr);
  }
  else{
    appendproduct(arr);
  }
});

type4.addEventListener("change", function(){
  getdata.innerHTML = "";
  if(this.checked){
    var smartarr = [];
    arr.map(function(ele){
      if(ele.tv_type.Smart_tv == true){
        smartarr.push(ele);
      }
    });

    appendproduct(smartarr);
  }
  else{
    appendproduct(arr);
  }
});

type5.addEventListener("change", function(){
  getdata.innerHTML = "";
  if(this.checked){
    var braviaarr = [];
    arr.map(function(ele){
      if(ele.tv_type.BRAVIA_XR == true){
        braviaarr.push(ele);
      }
    });
    appendproduct(braviaarr);
  }
  else{
    appendproduct(arr);
  }
});

let price1btn = document.querySelector("#below40");
let price2btn = document.querySelector("#g40");
let price3btn = document.querySelector("#g80");
let price4btn = document.querySelector("#g150");

price1btn.addEventListener("click",function(){
  getdata.innerHTML = "";
  if(price1btn.style.color == "white"){
    price1btn.style.backgroundColor = "white";  
    price1btn.style.color = "black";

    appendproduct(arr);
  }
  else{
    price1btn.style.backgroundColor = "#2f353d";
    price1btn.style.color = "white";
    price2btn.style.backgroundColor = "white";
    price2btn.style.color = "black";
    price3btn.style.backgroundColor = "white";
    price3btn.style.color = "black";
    price4btn.style.backgroundColor = "white";
    price4btn.style.color = "black";

    var p1arr = [];
    arr.map(function(ele){
      let p = (Number)(ele.price);
      if(p <= 40000){
        p1arr.push(ele);
      }
    });
    appendproduct(p1arr);
  }
});

price2btn.addEventListener("click",function(){
  getdata.innerHTML = "";
  if(price2btn.style.color == "white"){
    price2btn.style.backgroundColor = "white";  
    price2btn.style.color = "black";

    appendproduct(arr);
  }
  else{
    price1btn.style.backgroundColor = "white";
    price1btn.style.color = "black";
    price2btn.style.backgroundColor = "#2f353d";
    price2btn.style.color = "white";
    price3btn.style.backgroundColor = "white";
    price3btn.style.color = "black";
    price4btn.style.backgroundColor = "white";
    price4btn.style.color = "black";

    var p2arr = [];
    arr.map(function(ele){
      let p = (Number)(ele.price);
      if(p > 40000 && p <= 80000){
        p2arr.push(ele);
      }
    });
    appendproduct(p2arr);
  }
});

price3btn.addEventListener("click",function(){
  getdata.innerHTML = "";
  if(price3btn.style.color == "white"){
    price3btn.style.backgroundColor = "white";  
    price3btn.style.color = "black";

    appendproduct(arr);
  }
  else{
    price1btn.style.backgroundColor = "white";
    price1btn.style.color = "black";
    price2btn.style.backgroundColor = "white";
    price2btn.style.color = "black";
    price3btn.style.backgroundColor = "#2f353d";
    price3btn.style.color = "white";
    price4btn.style.backgroundColor = "white";
    price4btn.style.color = "black";

    var p3arr = [];
    arr.map(function(ele){
      let p = (Number)(ele.price);
      if(p > 80000 && p <= 150000){
        p3arr.push(ele);
      }
    });
    appendproduct(p3arr);
  }
});

price4btn.addEventListener("click",function(){
  getdata.innerHTML = "";
  if(price4btn.style.color == "white"){
    price4btn.style.backgroundColor = "white";  
    price4btn.style.color = "black";

    appendproduct(arr);
  }
  else{
    price1btn.style.backgroundColor = "white";
    price1btn.style.color = "black";
    price2btn.style.backgroundColor = "white";
    price2btn.style.color = "black";
    price3btn.style.backgroundColor = "white";
    price3btn.style.color = "black";
    price4btn.style.backgroundColor = "#2f353d";
    price4btn.style.color = "white";

    var p4arr = [];
    arr.map(function(ele){
      let p = (Number)(ele.price);
      if(p > 150000){
        p4arr.push(ele);
      }
    });
    appendproduct(p4arr);
  }
});

let sortfeatured = document.querySelector("#sortfeatured");
let sorthigh = document.querySelector("#sorthigh");
let sortlow = document.querySelector("#sortlow");
let sortnew = document.querySelector("#sortnew");

sortfeatured.addEventListener("change",function(){
  getdata.innerHTML = "";
  if(this.checked){
    var featarr = [];
    arr.map(function(ele){
      if(ele.tv_type.Google_tv == true){
        featarr.push(ele);
      }
    });
    appendproduct(featarr);
  }
  else{
    appendproduct(arr);
  }
});

sorthigh.addEventListener("change",function(){
  getdata.innerHTML = "";
  if(this.checked){
    let higharr = arr;
    higharr.sort((a,b) => {
      return b.price - a.price; 
    });
    appendproduct(higharr);
  }
  else{
    let narr = JSON.parse(localStorage.getItem("products"));
    appendproduct(narr);
  }
});

sortlow.addEventListener("change",function(){
  getdata.innerHTML = "";
  if(this.checked){
    let lowarr = arr;
    lowarr.sort((a,b) => {
      return a.price - b.price; 
    });
    appendproduct(lowarr);
  }
  else{
    let narr = JSON.parse(localStorage.getItem("products"));
    appendproduct(narr);
  }
});

sortnew.addEventListener("change",function(){
  getdata.innerHTML = "";
  if(this.checked){
    var newarr = [];
    arr.forEach((ele) => {
      if(ele.tv_type.BRAVIA_XR == true){
        newarr.push(ele);
      }
    })
    appendproduct(newarr);
  }
  else{
    appendproduct(arr);
  }
});

head.addEventListener("click",function(){
  window.location.href = "headphones.html";
})

mp3p.addEventListener("click",function(){
  window.location.href = "musicp.html";
})







