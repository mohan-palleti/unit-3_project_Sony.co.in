//to Add TV Items
async function addProduct() {
  try {
    let data = {
      tv_type: {
        id: document.getElementById("model_number").value,
        OLED: document.getElementById("OLED").checked,
        Full_Array_LED: document.getElementById("Full_array_LED").checked,
        LED_Display: document.getElementById("LED_display").checked,
        Smart_tv: document.getElementById("Smart_tv").checked,
        Google_tv: document.getElementById("Google_tv").checked,
        HDMI: document.getElementById("HDMI_2.1").checked,
        BRAVIA_XR: document.getElementById("BRAVIA_XR").checked,
        MASTER_Series: document.getElementById("MASTER_Series").checked,
      },
      resolution: document.getElementById("resolution").value,
      size: {
        32: document.getElementById("32").checked,
        43: document.getElementById("43").checked,
        50: document.getElementById("50").checked,

        55: document.getElementById("55").checked,
        65: document.getElementById("65").checked,
        75: document.getElementById("75").checked,
        85: document.getElementById("85").checked,
      },
      price: document.getElementById("price").value,
      model: document.getElementById("model").value,
      Image: document.getElementById("image_url").value,
      description: document.getElementById("description").value,
      id: document.getElementById("id_tv").value,
      buy: document.getElementById("buy_link_tv").value,
    };
    data = JSON.stringify(data);
    let response = await fetch("http://127.0.0.1:5000/api/products", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });

    let d = await response.json();
    console.log("data:", d);
  } catch (err) {
    console.log("err:", err);
  }
}
//Delete TV Items
async function deleteProduct() {
  try {
    let id = document.getElementById("delete_id").value;

    let response = await fetch(`http://127.0.0.1:5000/api/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let d = await response.json();
    console.log("d:", d);
  } catch (err) {
    console.log("err:", err);
  }
}
//To get_ TV items
async function get_tv_items() {
  try {
    let response = await fetch(`http://127.0.0.1:5000/api/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let d = await response.json();
    console.log("get:", d);
    append_TV(d);
  } catch (err) {
    console.log("err:", err);
  }
}
let append_tv_details = document.querySelector("append_tv_details");
function append_TV(d) {
  d.forEach((element) => {
    let div = document.createElement("div");
    let model = document.createElement("h3");
    let resolution = document.createElement("p");
    let price = document.createElement("p");

    let type = document.createElement("p");
    let size = document.createElement("p");
    let b = "",
      g = "";
    for (let x in element.tv_type) {
      if (element.tv_type[x] === true) {
        b += x + " ";
      }
    }
    type.innerHTML = `Type: ${b}`;
    model.innerHTML = `Model: ${element.model}`;
    resolution.innerHTML = element.resolution;
    price.innerHTML = `Price:${element.price}`;
    for (let x in element.size) {
      if (element.size[x]) {
        g += x + " ";
      }
    }
    size.innerHTML = `Available Sizes ${g}`;
    div.append(model, resolution, price, type, size);
    document.getElementById("append_tv_details").append(div);
  });
}
//--------------------API calls for MP3 players------------------------------------------------------------------------------------------------
//to Add Items
async function addmp3() {
  try {
    let data = {
      id: document.getElementById("id_mp3").value,

      resolution: document.getElementById("resolution_mp3").value,

      head_price: document.getElementById("price_mp3").value,
      headphone_model: document.getElementById("model_mp3").value,

      Image: document.getElementById("image_url_mp3").value,
      description_head: document.getElementById("description_mp3").value,
      buy: document.getElementById("buy_link_mp3").value,
    };
    data = JSON.stringify(data);
    let response = await fetch("http://127.0.0.1:5000/api/mp3players", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });

    let d = await response.json();
    console.log("data:", d);
  } catch (err) {
    console.log("err:", err);
  }
}
//Delete Items
async function deleteMp3() {
  try {
    let id = document.getElementById("delete_id_mp3").value;

    let response = await fetch(`http://127.0.0.1:5000/api/mp3players/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let d = await response.json();
    console.log("d:", d);
  } catch (err) {
    console.log("err:", err);
  }
}
// get Mp3 players details
async function get_mp3_items() {
  try {
    let response = await fetch(`http://127.0.0.1:5000/api/mp3players`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let d = await response.json();
    console.log("get:", d);
    append_MP3(d);
  } catch (err) {
    console.log("err:", err);
  }
}

function append_MP3(d) {
  d.forEach((element) => {
    let div = document.createElement("div");
    let name = document.createElement("h3");
    let resolution = document.createElement("p");
    let price = document.createElement("p");
    name.innerHTML = `Name: ${element.name}`;
    resolution.innerHTML = `Model:${element.model}`;
    price.innerHTML = `Price:${element.price}`;

    div.append(name, resolution, price);
    document.getElementById("append_MP3").append(div);
  });
}

//------------------- headphone api calls-------------------------------------------------------------------------------------

//to ADD head phones
async function addheadphone() {
  try {
    let data = {
      headphones_type: {
        EXTRA: document.getElementById("EXTRA").checked,
        BASS: document.getElementById("BASS").checked,
        WIRELESS: document.getElementById("WIRELESS").checked,
        MDR_XB450: document.getElementById("MDR-XB450").checked,
        MDR_ZX110: document.getElementById("MDR-ZX110").checked,
        WHCH_510: document.getElementById("WHCH-510").checked,
        XB450BV: document.getElementById("XB450BV").checked,
      },
      resolution: document.getElementById("resolution_head").value,

      price: document.getElementById("price_head").value,
      model: document.getElementById("model_head").value,

      Image: document.getElementById("image_url_head").value,
      description: document.getElementById("description_head").value,
      id: document.getElementById("id_head").value,
      buy: document.getElementById("buy_link_head").value,
    };
    data = JSON.stringify(data);
    let response = await fetch("http://127.0.0.1:5000/api/headphones", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });

    let d = await response.json();
    console.log("data:", d);
  } catch (err) {
    console.log("err:", err);
  }
}
//Delete Items
async function deletehead() {
  try {
    let id = document.getElementById("delete_id_head").value;

    let response = await fetch(`http://127.0.0.1:5000/api/headphones/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let d = await response.json();
    console.log("d:", d);
  } catch (err) {
    console.log("err:", err);
  }
}
// get Mp3 players details
async function get_head_items() {
  try {
    let response = await fetch(`http://127.0.0.1:5000/api/headphones`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let d = await response.json();
    console.log("get:", d);
    append_headphone(d);
  } catch (err) {
    console.log("err:", err);
  }
}

function append_headphone(d) {
  d.forEach((element) => {
    let div = document.createElement("div");
    let name = document.createElement("h3");
    let resolution = document.createElement("p");
    let price = document.createElement("p");
    name.innerHTML = `Name: ${element.model}`;
    resolution.innerHTML = `Model:${element.resolution}`;
    price.innerHTML = `Price:${element.price}`;

    div.append(name, resolution, price);
    document.getElementById("append_headphone").append(div);
  });
}

// --------------------------------------------------function for UI (BUTTONS)-----------------------------------------------------------------------------
function displaymenu(category) {
  let tvcategory = document.querySelector(".container_tv");
  let headcategory = document.querySelector(".container_headphone");
  let mp3 = document.querySelector(".container_MP3_Player");
  if (category === "TV") {
    console.log("tv");
    tvcategory.style.opacity = "1";
    tvcategory.style.pointerEvents = "visible";
    tvcategory.style.height = "700px";

    headcategory.style.opacity = "0";
    headcategory.style.pointerEvents = "none";
    headcategory.style.height = "0px";

    mp3.style.opacity = "0";
    mp3.style.pointerEvents = "none";
    mp3.style.height = "0px";
  }
  if (category === "headphone") {
    console.log("headphone");
    tvcategory.style.opacity = "0";
    tvcategory.style.pointerEvents = "none";
    tvcategory.style.height = "0px";

    headcategory.style.opacity = "1";
    headcategory.style.pointerEvents = "visible";
    headcategory.style.height = "700px";

    mp3.style.opacity = "0";
    mp3.style.pointerEvents = "none";
    mp3.style.height = "0px";
  }
  if (category === "mp3") {
    console.log("mp3");
    mp3.style.opacity = "1";
    mp3.style.pointerEvents = "visible";
    mp3.style.height = "700px";

    tvcategory.style.opacity = "0";
    tvcategory.style.pointerEvents = "none";
    tvcategory.style.height = "0px";

    headcategory.style.opacity = "0";
    headcategory.style.pointerEvents = "none";
    headcategory.style.height = "0px";
  }
}