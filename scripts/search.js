async function getsearch() {
  let intype = document.getElementById("search_item").value;
  let search_results = document.querySelector("#search_results");
  if (intype.length <= 2) {
    document.getElementById("search_results").style.display = "none";
    return false;
  } else {
    let resp = await fetch(
      `https://sonyproducts.herokuapp.com/tvProducts/search/?s=${intype}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await resp.json();
    search_results.innerHTML = null;
    search_results.style.display = "block";

    let tvarr = data.resultTV;
    let headarr = data.resultHEAD;
    let mp3arr = data.resultmp3;

    if (tvarr.length != 0 || headarr.length != 0 || mp3arr.length != 0) {
      append_result_input(tvarr, headarr, mp3arr);
      document.querySelector("#search_results").style.height = "260px";
    }
    else{
      document.querySelector("#search_results").style.height = "0px";
    }
  }
}

function append_result_input(tvarr, headarr, mp3arr) {
  document.getElementById("search_results").style.pointerEvents = "visible";
  tvarr.forEach((ele, index) => {
    let search_results = document.getElementById("search_results");
    let box2 = document.createElement("div");
    box2.setAttribute("id", "box2");
    box2.addEventListener("click", () => {
      let pro = "TELEVISIONS";
      localStorage.setItem("singleProduct", JSON.stringify(ele));
      localStorage.setItem("productType", JSON.stringify(pro));
      window.location.href = "singlep.html";
    });
    let right_box = document.createElement("div");
    right_box.setAttribute("id", "right_box");
    let left_box = document.createElement("div");
    left_box.setAttribute("id", "left_box");
    let img = document.createElement("img");
    img.setAttribute("id", "search_img");
    img.style.height = "80px";
    // img.style.width="100%";
    img.src = ele.Image[0];
    left_box.append(img);
    let resolution = document.createElement("h3");
    resolution.innerText = ele.resolution;
    let model = document.createElement("h4");
    model.innerText = ele.model;
    right_box.append(model, resolution);
    box2.append(left_box, right_box);
    search_results.append(box2);
  });

  headarr.forEach((ele, index) => {
    let search_results = document.getElementById("search_results");
    let box2 = document.createElement("div");
    box2.setAttribute("id", "box2");
    box2.addEventListener("click", () => {
      let pro = "HEADPHONES";
      localStorage.setItem("singleProduct", JSON.stringify(ele));
      localStorage.setItem("productType", JSON.stringify(pro));
      window.location.href = "singlep.html";
    });
    let right_box = document.createElement("div");
    right_box.setAttribute("id", "right_box");
    let left_box = document.createElement("div");
    left_box.setAttribute("id", "left_box");
    let img = document.createElement("img");
    img.setAttribute("id", "search_img");
    img.style.height = "80px";
    // img.style.width="50%";
    img.src = ele.Image[0];
    left_box.style.display = "flex";
    left_box.style.justifyContent = "center";
    left_box.append(img);
    let resolution = document.createElement("h3");
    resolution.innerText = ele.resolution;
    let model = document.createElement("h4");
    model.innerText = ele.model;
    right_box.append(resolution);
    box2.append(left_box, right_box);
    search_results.append(box2);
  });

  mp3arr.forEach((ele, index) => {
    let search_results = document.getElementById("search_results");
    let box2 = document.createElement("div");
    box2.setAttribute("id", "box2");
    box2.addEventListener("click", () => {
      let pro = "MP3 PLAYERS";
      localStorage.setItem("singleProduct", JSON.stringify(ele));
      localStorage.setItem("productType", JSON.stringify(pro));
      window.location.href = "singlep.html";
    });
    let right_box = document.createElement("div");
    right_box.setAttribute("id", "right_box");
    let left_box = document.createElement("div");
    left_box.setAttribute("id", "left_box");
    let img = document.createElement("img");
    img.setAttribute("id", "search_img");
    img.style.height = "80px";
    // img.style.width="50%";
    img.src = ele.Image[0];
    left_box.style.display = "flex";
    left_box.style.justifyContent = "center";
    left_box.append(img);
    let resolution = document.createElement("h3");
    resolution.innerText = ele.resolution;
    let model = document.createElement("h4");
    model.innerText = ele.model;
    right_box.append(model);
    box2.append(left_box, right_box);
    search_results.append(box2);
  });
}

let search_sony = document.querySelector("#search_sony");
let drop_down_search = document.querySelector(".drop_down_search");
let search_results = document.querySelector("#search_results");
search_sony.addEventListener("click", function () {
  if (drop_down_search.style.display == "none") {
    search_results.style.display = "none";
  }
});

// var timerId;

// let movies_div = document.getElementById("movies");

// async function searchMovies(name) {
//   movies_div.innerHTML = null;

//   let response = await fetch(
//     `https://www.omdbapi.com/?s=${name}&apikey=d806bd70`
//   );

//   let data = await response.json();

//   return data.Search;
// }

// async function appendMovies(m) {
//   if (m === undefined) {
//     return false;
//   }

//   m.forEach(({ Title }) => {
//     let p = document.createElement("p");

//     p.innerText = Title;

//     movies_div.append(p);
//   });
// }

// function throttleFunction(func, delay) {
//   // If setTimeout is already scheduled, no need to do anything
//   if (timerId) {
//     clearTimeout(timerId);
//   }

//   // Schedule a setTimeout after delay seconds
//   timerId = setTimeout(function () {
//     func();
//   }, delay);
// }

// async function main() {
//   let name = document.getElementById("query").value;

//   if (name.length <= 2) {
//     return false;
//   }

//   console.log("fired");

//   let m = await searchMovies(name);

//   appendMovies(m);
// }

//1. get input value
//2. search movie by name
//3. append movies
//4. add edgecases
//5. need of debouncing
//6. implement debounce function
