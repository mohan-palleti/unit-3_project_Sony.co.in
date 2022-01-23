async function getsearch()
{
  let intype = document.getElementById("search_item").value;
  if(intype.length<=3)
  {
    document.getElementById("search_results").style.display="none";
    return false;
  }
  let resp = await fetch(`http://127.0.0.1:5000/api/products`,{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
    },

  });
  let data = await resp.json();
  let search_results=document.getElementById("search_results");
  search_results.innerHTML=null;
  search_results.style.display="block";
  append_result_input(data);
}

function append_result_input(data)
{
    document.getElementById("search_results").style.pointerEvents="visible";
  data.forEach((ele,index)=>{
    let search_results=document.getElementById("search_results");
    let box1 = document.createElement("div");
    box1.setAttribute("id","box1");
    box1.addEventListener("click",()=>{
        console.log("sony");
     window.location.href="tv.html";
    });
    let right_box = document.createElement("div");
    right_box.setAttribute("id","right_box");
    let left_box=document.createElement("div");
    left_box.setAttribute("id","left_box");
    let img= document.createElement("img");
    img.setAttribute("id","search_img");
    img.style.height="100%";
    img.style.width="100%";
    img.src=ele.Image;
    
    left_box.append(img);
    let resolution = document.createElement("h3");
    resolution.innerText=ele.resolution;
    let model = document.createElement("h4");
    model.innerText=ele.model;
    right_box.append(resolution,model);
    box1.append(left_box,right_box);
   if(index==0)
   {
    let divproduct = document.createElement("div");
   divproduct.setAttribute("id","divproduct");
   let products = document.createElement("h3");
   products.innerHTML="PRODUCTS";
     divproduct.append(products);
     let br = document.createElement("hr");
     search_results.append(divproduct,br);
   } 
   if(index==5)
   {
    let divsee = document.createElement("div");
    divsee.setAttribute("id","divsee");
    let more = document.createElement("button");
    more.setAttribute("id","more")
    more.innerText="Show All Results";
    divsee.append(more);
    search_results.append(divsee);
   }

  
   
    search_results.append(box1);
    


  })
}
