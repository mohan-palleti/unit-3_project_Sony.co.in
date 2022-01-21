


async function login(event) {
        event.preventDefault();
        login_data = {
            username: document.getElementById("username_login").value,
            password: document.getElementById("password_login").value
        }
        login_data = JSON.stringify(login_data);
       
        let url = "https://masai-api-mocker.herokuapp.com/auth/login"

        
           
            let res = await fetch(url, {

                method: "POST",

                body: login_data,

                headers: {
                    "Content-Type": "application/json",
                },
            });
            let dat = await res.json();

         //   console.log(dat.token);
          let user=  document.getElementById("username_login").value;
        getuser(user,dat.token);
        
    }

     
    async function getuser(username, token){
        let api=`https://masai-api-mocker.herokuapp.com/user/${username}`;
       try{
        let res =await fetch(api,{
            headers:{
                "Content-Type":"appication/json",
                Authorization:`Bearer ${token}`
            },
        });
        let data = await res.json();
        if(data!==null){
            alert("Sign Sucessfully",window.location.href = "/")
            //window.location.href="day1.html"
        }
        
    console.log(data)
       }
       catch(err){
           console.log(err)
        
       }

    }
