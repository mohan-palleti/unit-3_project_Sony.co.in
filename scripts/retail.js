function getpin(event) {
  event.preventDefault();
  let pin = document.getElementById("pincode").value;
  if(pin.length == 0){
    alert("Please enter your area pincode.");
  }
  else{
    pincode(pin);
  }
}

async function pincode(PINCODE) {
  try {
    let res = await fetch(`https://api.postalpincode.in/pincode/${PINCODE}`);
    let data = await res.json();
    let district = data[0].PostOffice[0].District;
    console.log("add", data[0].PostOffice[0].District);
    let gmap = document.getElementById("gmap_canvas");
    gmap.src = `https://maps.google.com/maps?q=${district}%20Sony%20Centre&ie=UTF8&iwloc=&output=embed`;
  } catch (err) {
    console.log("err:", err);
  }
}

let pinc = JSON.parse(localStorage.getItem("pincode"));
let pin = document.getElementById("pincode");
if(pinc.length != 0){
  pin.innerHTML = pinc;
  pincode(pinc);
}
