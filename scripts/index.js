
  let store;
  async function coffee(){
     try{
       let url=`https://masai-mock-api.herokuapp.com/coffee/menu`;
       let res=await fetch(url)
       let data=await res.json()
      store=data.menu.data
       // console.log(store)

       appenddata(store)
     }
     catch(error){
       console.log(error)
     }
   }
   coffee()


      let coffeearr=[]
      let bucketArr=JSON.parse(localStorage.getItem("bucket"))||[]
   function appenddata(store){
     store.forEach(function(el,index){
       
       let upper=document.createElement("div")
       upper.setAttribute("id","box")

       let divimg=document.createElement("div")
       divimg.setAttribute("id","divimg")
       let img=document.createElement("img")
       img.src=el.image
       divimg.append(img)

       let title=document.createElement("p")
       title.textContent=el.title

       let price=document.createElement("p")
       price.textContent=el.price

       let addcart=document.createElement("button")
       addcart.setAttribute("id","add_to_bucket")
       addcart.textContent="Add to cart"
       addcart.addEventListener("click",function(){
         addfunc(el)
       })

       upper.append(divimg,title,price,addcart)
       document.getElementById("menu").append(upper)
       
       coffeearr.push(upper)
       // console.log(coffeearr)
       localStorage.setItem("coffee",JSON.stringify(coffeearr))
      
     })
   }
   function getBucketCount()
   {
     document.getElementById('coffee_count').textContent = JSON.parse(localStorage.getItem('bucket')).length
   }
   getBucketCount();
      
   function addfunc(el){
       bucketArr.push(el)
       // console.log(el)
       // console.log(coffeearr)
       localStorage.setItem("bucket",JSON.stringify(bucketArr))

       getBucketCount();
   }
   
       


  