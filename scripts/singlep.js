var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let slideshow_container = document.querySelector(".slideshow-container");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

function nextprev(){
  next.style.transition = "ease 0.6s";
  next.style.backgroundColor = "grey";
  prev.style.transition = "ease 0.6s";
  prev.style.backgroundColor = "grey";
}

function prevnext(){
  next.style.transition = "ease 0.6s";
  next.style.backgroundColor = "whitesmoke";
  prev.style.transition = "ease 0.6s";
  prev.style.backgroundColor = "whitesmoke";
}

let phead = document.querySelector(".Phead");
let iconhead = document.querySelector(".iconhead");
let pname = document.querySelector(".Pname");

function headover(){
  iconhead.style.transition = "ease 0.6s";
  iconhead.style.color = "black";
}

function headout(){
  iconhead.style.transition = "ease 0.6s";
  iconhead.style.color = "#747481";
}

let productdisc = document.querySelector(".productdisc>p");
let about_product = document.querySelector(".about_product>p");
let ptitle = document.querySelector(".ptitle>p");
let modelname = document.querySelector("#s1");
let mrp2 = document.querySelector(".mrp2");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");
let img5 = document.querySelector(".img5");
let amazonbtn = document.querySelector(".amazonbtn");
let flipkartbtn = document.querySelector(".flipkartbtn");
let vijaybtn = document.querySelector(".vijaybtn");

let data = JSON.parse(localStorage.getItem("singleProduct"));

let pro = JSON.parse(localStorage.getItem("productType"));

pname.innerHTML = pro;

function headclick(){
  if(pname.innerHTML == "TELEVISIONS"){
    window.location.href = "./tv.html";
  }
  else if(pname.innerHTML == "HEADPHONES"){
    window.location.href = "./headphones.html";
  }
  else{
    window.location.href = "./musicp.html";
  }
}

console.log(data);

if(pname.innerHTML == "TELEVISIONS"){
  document.title = data.model;
  let head = [];
  let tvtype = data.tv_type;
  for (let i = 0; i < tvtype.length; i++) {
    let tp = tvtype[i];
    let th = tp.replace(/_/g, " ");
    head.push(th);
  }
  let gh = head.join(", ");
  productdisc.innerHTML = `${data.model} (${data.size[0]}) ${data.resolution} ${gh}`;
  ptitle.innerHTML = "Discover the definitive screen experience";
  modelname.innerHTML = data.model;
  about_product.innerHTML = data.description;
  mrp2.innerHTML = `Rs. ${data.price}`;
  amazonbtn.addEventListener("click", function(){
    let url = `https://www.amazon.in/s?k=sony+tv&rh=n%3A976419031%2Cp_89%3ASony&dc&crid=2ZMYCAWB378P4&qid=1645895405&rnid=3837712031&sprefix=sony+tv%2Caps%2C327&ref=sr_nr_p_89_1`;
    window.open(url, "_black");
  });
  
  flipkartbtn.addEventListener("click", function(){
    let url = `https://www.flipkart.com/search?sid=czl&otracker=CLP_Filters&p%5B%5D=facets.brand%255B%255D%3DSONY`;
    window.open(url, "_black");
  });
  
  vijaybtn.addEventListener("click", function(){
    let url = `https://www.vijaysales.com/search/sony`;
    window.open(url, "_black");
  });
}
else if(pname.innerHTML == "HEADPHONES"){
  document.title = data.model;
  productdisc.innerHTML = data.model;
  modelname.innerHTML = data.resolution;
  mrp2.innerHTML = `Rs. ${data.price}`;
  amazonbtn.addEventListener("click", function(){
    let url = `https://www.amazon.in/s?k=sony+headphones&sprefix=sony+%2Caps%2C456&ref=nb_sb_ss_ts-doa-p_4_5`;
    window.open(url, "_black");
  });
  
  flipkartbtn.addEventListener("click", function(){
    let url = `https://www.flipkart.com/search?q=sony%20headphones&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off`;
    window.open(url, "_black");
  });
  
  vijaybtn.addEventListener("click", function(){
    let url = `https://www.vijaysales.com/search/sony`;
    window.open(url, "_black");
  });
}
else{
  document.title = data.model;
  productdisc.innerHTML = data.model;
  ptitle.innerHTML = "Define your style with colourful, premium design and high quality sound.";
  about_product.innerHTML = data.description;
  modelname.innerHTML = data.name;
  mrp2.innerHTML = `Rs. ${data.price}`;
  amazonbtn.addEventListener("click", function(){
    let url = `https://www.amazon.in/s?k=sony+mp3+player&sprefix=sony+mp3%2Caps%2C311&ref=nb_sb_ss_ts-doa-p_1_8`;
    window.open(url, "_black");
  });
  
  flipkartbtn.addEventListener("click", function(){
    let url = `https://www.flipkart.com/search?q=sony+mp3+player&sid=ckf%2Core%2Ch2k&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_9_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_9_na_na_na&as-pos=1&as-type=RECENT&suggestionId=sony+mp3+player%7CMP3+Players&requestId=fb7ab6fa-0c3d-46fc-a4a5-8a45a4e59331&as-backfill=on`;
    window.open(url, "_black");
  });
  
  vijaybtn.addEventListener("click", function(){
    let url = `https://www.vijaysales.com/search/sony`;
    window.open(url, "_black");
  });
}
let imgp = data.Image;

img1.src = imgp[0];
img2.src = imgp[1];
img3.src = imgp[2];
img4.src = imgp[3];
img5.src = imgp[4];



