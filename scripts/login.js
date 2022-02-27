async function login(event) {
  try {
    event.preventDefault();
    login_data = {
      email: document.getElementById("username_login").value,
      password: document.getElementById("password_login").value,
    };
    login_data = JSON.stringify(login_data);

    // let url = "https://masai-api-mocker.herokuapp.com/auth/login"
    let url = "https://sony-authenticate.herokuapp.com/user/login";
    let res = await fetch(url, {
      method: "POST",

      body: login_data,

      headers: {
        "Content-Type": "application/json",
      },
    });
    let dat = await res.json();
    console.log(dat);

    if (dat.status == true) {
      alert("Log In Successfull", (window.location.href = "./index.html"));
      let u = dat.user.name;
      localStorage.setItem("register", JSON.stringify(u));
      let system = "online";
      localStorage.setItem("system", JSON.stringify(system));
    } else if (dat.admin == true) {
      alert("Welcome admin!", (window.location.href = "./admin.html"));
    } else {
      alert("Please check your Email or Password.");
    }
  } catch (err) {
    console.log("err:", err);
  }
}

// async function getuser(username) {
//   // let api = `https://masai-api-mocker.herokuapp.com/user/${username}`;
//   let api = `https://sony-authenticate.herokuapp.com/user/${username}`;
//   try {
//     let res = await fetch(api, {
//       headers: {
//         "Content-Type": "appication/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     let data = await res.json();
//     if (data != null) {
//       //window.location.href="day1.html"
//     }
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
