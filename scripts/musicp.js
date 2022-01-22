get();
let arr=[];
async function get()
{
    try{
        let responce = await fetch(`http://127.0.0.1:5000/api/mp3players`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
            },
        });
        let data = await responce.json();
    
        for(var i=0;i<data.length;i++)
        {
            arr.push(data[i]);
        }
        appendhead(arr);

    }
    catch(err)
    {
        console.log(err);
    }
}


function appendhead(data){
    data.forEach((ele)=>{
        // arr.push(ele);
        let main = document.createElement("div");
        main.setAttribute("id","main");

        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("id","imgDiv");

        let img= document.createElement("img");
        img.setAttribute("id","imgofheadphone");
        
        img.src=ele.Image;
        imgDiv.append(img);

        let div1 = document.createElement("div");
        div1.setAttribute("id","div1")
        let model = document.createElement("h4");
        model.innerText=ele.name;
        div1.append(model);
        let div2= document.createElement("div");
        div2.setAttribute("id","div2");
        let resolution = document.createElement("h5");
        resolution.innerText=ele.model;
        div2.append(resolution);
        let div3 = document.createElement("div");
        div3.setAttribute("id","div3");
        let description = document.createElement("p");
        description.innerText = ele.description;
        div3.append(description);
        let div4 = document.createElement("div");
        div4.setAttribute("id","div4");
        let price = document.createElement("h4");
        price.innerHTML="MRP Rs. "+ele.price+"/- Only";
        let inclu = document.createElement("p");
        inclu.innerText="(incl. of all taxes)"
        div4.append(price,inclu);
        let div5 = document.createElement("div");
        div5.setAttribute("id","div5");
        let button=document.createElement("button");
        button.setAttribute("id","button")
        button.innerText="BUY";
        div5.append(button);

        button.addEventListener("click", function(){
            window.open(ele.buy,'_blank');
        });

        main.append(imgDiv,div1,div2,div3,div4,div5);
        let getdata = document.getElementById("getdata");
        getdata.append(main);
    });

}

function sortarr(){
  if(document.getElementById("sort").value=="Low")
  {
      let arr11= arr.sort((a,b)=>{
          return a.price-b.price;
      })
      document.getElementById("getdata").innerHTML=null;
      appendhead(arr11);
      console.log("pavan");
  }
  else if(document.getElementById("sort").value=="High")
  {
      let arr22 = arr.sort((a,b)=>{
          return b.price-a.price;
      });
      document.getElementById("getdata").innerHTML=null;
      appendhead(arr22);
      console.log("gavan");
  }
}









