function validation(){
        let form = document.getElementById('form')
        let email = document.getElementById("email").value;

        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        let text = document.getElementById('text');

        if(email.match(pattern)){
           form.classList.add("valid");
           form.classList.remove("invalid");
           text.innerHTML = "Your email address is valid";
           text.style.color = "#00ff00";
        }else{
            form.classList.remove("valid")
            form.classList.add("invalid");
            text.innerHTML = "Please Enter valid email address";
            text.style.color = "#ff0000";
        }
        if(email == ""){
            form.classList.remove("valid");
            form.classList.remove("invalid");
            text.innerHTML = "";
            text.style.color = "#00ff00";
        }
    }
var arr = JSON.parse(localStorage.getItem("register"));

function localStore() {
    let obj = {
        email: document.getElementById('email').value,
    }
    localStorage.setItem("register", JSON.stringify(obj));
}
//console.log(arr.email)
var flag = true;

async function storeSign(e) {
    e.preventDefault()
    try {
        var create_ac = {
            name: document.getElementById('given').value,
            email: arr.email,
            password: document.getElementById('password').value,
            username: document.getElementById('family').value,
            mobile: document.getElementById('mobile').value,
            description: document.getElementById('state').value,
        }
        create_ac = JSON.stringify(create_ac);
        console.log(create_ac);
    }
    catch (err1) {
        console.log(err1);
    }
         
    try {
        let reg = 'https://masai-api-mocker.herokuapp.com/auth/register';

        let res = await fetch(reg, {
            method: 'POST',

            body: create_ac,

            headers: {
                "Content-Type": "application/json"
            },
        });

        let data = await res.json();
        if (data.error === true) {
            alert(data.message, window.location.href = "./register.html");
        } else {
            alert(data.message, window.location.href = "./reg3rdpage.html");
        }

        console.log("data:", data);
    }
    catch (err) {
        console.log(err);
    }
}

