//to Add TV Items
async function addProduct() {
  try {
    let types = {
      id: document.getElementById("model_number").value,
      OLED: document.getElementById("OLED").checked,
      Full_Array_LED: document.getElementById("Full_array_LED").checked,
      LED_Display: document.getElementById("LED_display").checked,
      Smart_tv: document.getElementById("Smart_tv").checked,
      Google_tv: document.getElementById("Google_tv").checked,
      HDMI: document.getElementById("HDMI_2.1").checked,
      BRAVIA_XR: document.getElementById("BRAVIA_XR").checked,
      MASTER_Series: document.getElementById("MASTER_Series").checked,
    };
    let arr_types = [];
    for (let x in types) {
      if (types[x]) {
        arr_types.push(x);
      }
    }
    let allsize = {
      32: document.getElementById("32").checked,
      43: document.getElementById("43").checked,
      50: document.getElementById("50").checked,

      55: document.getElementById("55").checked,
      65: document.getElementById("65").checked,
      75: document.getElementById("75").checked,
      85: document.getElementById("85").checked,
    };
    let sizefilter = [];
    for (let x in allsize) {
      if (allsize[x]) {
        sizefilter.push(x);
      }
    }
    let img = document.getElementById("image_url").value;
    let i = img.split("@");
    let data = {
      tv_type: arr_types,
      resolution: document.getElementById("resolution").value,
      size: sizefilter,
      price: document.getElementById("price").value,
      model: document.getElementById("model").value,
      Image: i,
      description: document.getElementById("description").value,
      id: document.getElementById("id_tv").value,
      buy: document.getElementById("buy_link_tv").value,
    };
    data = JSON.stringify(data);
    let response = await fetch(
      "https://sonyproducts.herokuapp.com/tvProducts",
      {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

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

    let response = await fetch(
      `https://sonyproducts.herokuapp.com/tvProducts/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let d = await response.json();
    console.log("d:", d);
  } catch (err) {
    console.log("err:", err);
  }
}
//To get_ TV items
let append_tv_details = document.querySelector("append_tv_details");
async function get_tv_items() {
  try {
    document.getElementById("append_tv_details").innerHTML =
      "<h2><b>Getting Details...</b></h2>";
    let response = await fetch(
      `https://sonyproducts.herokuapp.com/tvProducts`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let d = await response.json();
    console.log("get:", d);
    append_TV(d);
  } catch (err) {
    console.log("err:", err);
  }
}

function append_TV(d) {
  document.getElementById("append_tv_details").innerHTML = "";
  d.TV.forEach((element) => {
    let div = document.createElement("div");
    let model = document.createElement("h3");
    let resolution = document.createElement("p");
    let price = document.createElement("p");

    let type = document.createElement("p");
    let size = document.createElement("p");
    let id = document.createElement("p");
    id.innerHTML = `serial number ${element._id} `;
    let pro_id = document.createElement("p");
    pro_id.innerHTML = `Product ID ${element.id}`;
    // let b = "",
    //   g = "";
    // for (let x in element.tv_type) {
    //   if (element.tv_type[x] === true) {
    //     b += x + " ";
    //   }
    // }
    type.innerHTML = `Type: ${element.tv_type}`;
    model.innerHTML = `Model: ${element.model}`;
    resolution.innerHTML = element.resolution;
    price.innerHTML = `Price:${element.price}`;
    // for (let x in element.size) {
    //   if (element.size[x]) {
    //     g += x + " ";
    //   }
    // }
    size.innerHTML = `Available Sizes ${element.size}`;
    div.append(model, id, pro_id, resolution, price, type, size);
    document.getElementById("append_tv_details").append(div);
  });
}
//--------------------API calls for MP3 players------------------------------------------------------------------------------------------------
//to Add Items
async function addmp3() {
  try {
    let img = document.getElementById("image_url_mp3").value;
    let i = img.split("@");
    let data = {
      id: document.getElementById("id_mp3").value,

      resolution: document.getElementById("resolution_mp3").value,

      head_price: document.getElementById("price_mp3").value,
      headphone_model: document.getElementById("model_mp3").value,

      Image: i,
      description_head: document.getElementById("description_mp3").value,
      buy: document.getElementById("buy_link_mp3").value,
    };
    data = JSON.stringify(data);
    let response = await fetch("https://sonyproducts.herokuapp.com/mp3player", {
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

    let response = await fetch(
      `https://sonyproducts.herokuapp.com/mp3player/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let d = await response.json();
    console.log("d:", d);
  } catch (err) {
    console.log("err:", err);
  }
}
// get Mp3 players details
async function get_mp3_items() {
  try {
    document.getElementById("append_MP3").innerHTML =
      "<h2><b>Getting Details...</b></h2>";
    let response = await fetch(`https://sonyproducts.herokuapp.com/mp3player`, {
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
  document.getElementById("append_MP3").innerHTML = "";
  d.mp3player.forEach((element) => {
    let div = document.createElement("div");
    let name = document.createElement("h3");
    let resolution = document.createElement("p");
    let price = document.createElement("p");
    let serial_id = document.createElement("p");
    let ID = document.createElement("p");
    serial_id.innerHTML = `Serial No ${element._id}`;
    ID.innerHTML = `ID ${element.id}`;
    name.innerHTML = `Name: ${element.name}`;
    resolution.innerHTML = `Model:${element.model}`;
    price.innerHTML = `Price:${element.price}`;
    let hr = document.createElement("hr");
    div.append(serial_id, ID, name, resolution, price, hr);
    document.getElementById("append_MP3").append(div);
  });
}

//------------------- headphone api calls-------------------------------------------------------------------------------------

//to ADD head phones
async function addheadphone() {
  try {
    let head_type = {
      EXTRA: document.getElementById("EXTRA").checked,
      BASS: document.getElementById("BASS").checked,
      WIRELESS: document.getElementById("WIRELESS").checked,
      MDR_XB450: document.getElementById("MDR-XB450").checked,
      MDR_ZX110: document.getElementById("MDR-ZX110").checked,
      WHCH_510: document.getElementById("WHCH-510").checked,
      XB450BV: document.getElementById("XB450BV").checked,
    };
    let head_arr = [];
    for (let x in head_type) {
      if (head_type[x] === true) {
        head_arr.push(x);
      }
    }
    let img = document.getElementById("image_url_head").value;
    let i = img.split("@");
    let data = {
      headphones_type: head_arr,
      resolution: document.getElementById("resolution_head").value,

      price: document.getElementById("price_head").value,
      model: document.getElementById("model_head").value,

      Image: i,
      description: document.getElementById("description_head").value,
      id: document.getElementById("id_head").value,
      buy: document.getElementById("buy_link_head").value,
    };
    data = JSON.stringify(data);
    let response = await fetch("https://sonyproducts.herokuapp.com/headphone", {
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

    let response = await fetch(
      `https://sonyproducts.herokuapp.com/headphone/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let d = await response.json();
    console.log("d:", d);
  } catch (err) {
    console.log("err:", err);
  }
}
// get Head phone details
async function get_head_items() {
  try {
    document.getElementById("append_headphone").innerHTML =
      "<h2><b>Getting Details...</b></h2>";
    let response = await fetch(`https://sonyproducts.herokuapp.com/headphone`, {
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
  document.getElementById("append_headphone").innerHTML = "";
  d.headphone.forEach((element) => {
    let div = document.createElement("div");
    let name = document.createElement("h3");
    let resolution = document.createElement("p");
    let price = document.createElement("p");
    let serial_id = document.createElement("p");
    let ID = document.createElement("p");
    serial_id.innerHTML = `Serial No ${element._id}`;
    ID.innerHTML = `ID ${element.id}`;
    name.innerHTML = `Name: ${element.model}`;
    resolution.innerHTML = `Model:${element.resolution}`;
    price.innerHTML = `Price:${element.price}`;
    let hr = document.createElement("hr");
    div.append(serial_id, ID, name, resolution, price, hr);
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

//https://m.media-amazon.com/images/I/41Uj0CkYn2L._AC_SY580_.jpg@https://m.media-amazon.com/images/I/515kfxFoWkL._AC_SY580_.jpg@https://m.media-amazon.com/images/I/51m3V4zyGEL._AC_SY580_.jpg@https://m.media-amazon.com/images/I/51cjGmsnCPS._AC_SY580_.jpg
//@https://m.media-amazon.com/images/I/51QLhYPzzXL._AC_SY580_.jpg