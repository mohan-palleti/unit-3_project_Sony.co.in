function validation() {
  let form = document.getElementById("form");
  let email = document.getElementById("email").value;

  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  let text = document.getElementById("text");

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your email address is valid";
    text.style.color = "#00ff00";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please Enter valid email address";
    text.style.color = "#ff0000";
  }
  if (email == "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
    text.style.color = "#00ff00";
  }
}

var arr = JSON.parse(localStorage.getItem("useremail"));

async function localStore() {
  try {
    let obj = {
      email: document.getElementById("email").value,
    };

    let reg = "https://sony-authenticate.herokuapp.com/user/emailCheck";

    let res = await fetch(reg, {
      method: "POST",

      body: JSON.stringify(obj),

      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();

    if (data.status == false) {
      alert("Email is already exist, try new email");
    } else {
      window.location.href = "./register2.html";
    }

    console.log(data.status);
    localStorage.setItem("useremail", JSON.stringify(obj));
  } catch (error) {
  }
}
//console.log(arr.email)

//------------------catcha code-------------------------------------------------------
var flag = false;

// document.querySelector() is used to select an element from the document using its ID
let captchaText = document.querySelector("#captcha");
var ctx = captchaText.getContext("2d");
ctx.font = "35px Roboto";
ctx.fillStyle = "rgb(77, 73, 73)";

let userText = document.querySelector("#textBox");
let submitButton = document.querySelector("#submitButton");
let output = document.querySelector("#output");
let refreshButton = document.querySelector("#refreshButton");

// alphaNums contains the characters with which you want to create the CAPTCHA

var c = Math.random().toString(36).slice(6);
ctx.fillText(c, captchaText.width / 4, captchaText.height / 2);
console.log(c);

// This event listener is stimulated whenever the user press the "Enter" button
// "Correct!" or "Incorrect, please try again" message is
// displayed after validating the input text with CAPTCHA
function captchaValidator() {
  if (userText.value == c) {
    output.innerHTML = "Correct!";
    output.classList.add("correctCaptcha");
    output.classList.remove("incorrectCaptcha");
    flag = true;
  }
  else {
    output.innerHTML = "Incorrect, please try again";
    output.classList.remove("correctCaptcha");
    output.classList.add("incorrectCaptcha");
  }
  if(userText.value == ""){
    output.innerHTML = "-";
    output.classList.remove("incorrectCaptcha");
    output.classList.remove("correctCaptcha");
  }
};

// This event listener is stimulated whenever the user clicks the "Submit" button
// "Correct!" or "Incorrect, please try again" message is
// displayed after validating the input text with CAPTCHA
submitButton.addEventListener("click", function () {
  if (userText.value != "") {
    userText.value = "";
    output.innerHTML = "-";
  }
});

// This event listener is stimulated whenever the user press the "Refresh" button
// A new random CAPTCHA is generated and displayed after the user clicks the "Refresh" button
refreshButton.addEventListener("click", function () {
  userText.value = "";
  ctx.clearRect(0, 0, captchaText.width, captchaText.height);
  c = Math.random().toString(36).slice(6);
  ctx.fillText(
    c,
    captchaText.width / 4,
    captchaText.height / 2
  );
  output.innerHTML = "-";
});

async function storeSign(e, flag) {
  e.preventDefault();
  try {
    // let r = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";
    let p = false;

    var pass = document.getElementById("password").value,
      errors = [];
    if (pass.length < 8) {
      errors.push("Your password must be at least 8 characters");
    }
    if (pass.search(/[a-z]/i) < 0) {
      errors.push("Your password must contain at least one letter.");
    }
    if (pass.search(/[0-9]/) < 0) {
      errors.push("Your password must contain at least one digit.");
    }
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }
    if(output.innerHTML != "Correct!"){
      alert("Please enter correct captcha.");
      return;
    }
    p = true;

    if (p == true) {
      var create_ac = {
        email: arr.email,
        name: document.getElementById("given").value,
        lastname: document.getElementById("family").value,
        password: document.getElementById("password").value,
        phone: document.getElementById("mobile").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
      };
      create_ac = JSON.stringify(create_ac);
      console.log(create_ac);
      // let reg = 'https://masai-api-mocker.herokuapp.com/auth/register';

      let reg = "https://sony-authenticate.herokuapp.com/user/register";

      let res = await fetch(reg, {
        method: "POST",

        body: create_ac,

        headers: {
          "Content-Type": "application/json",
        },
      });

      let data = await res.json();
      if (data.status == false) {
        alert(data.message, (window.location.href = "./register1.html"));
      } else {
        alert(data.message, (window.location.href = "./register3.html"));
      }
      console.log("data:", data);
    }
  } catch (err) {
    console.log(err.message);
  }
}

// email: { type: String, required: true, unique: true },
// name: { type: String, required: true },
// lastname: { type: String, required: true },
// password: { type: String, required: true },
// phone: { type: Number, required: true, unique: true },
// city: { type: String, required: true },
// state: { type: String, required: true },
