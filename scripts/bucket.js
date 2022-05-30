// On clicking remove button the item should be removed from DOM as well as localstorage.
let bucketArr=JSON.parse(localStorage.getItem("bucket"))

displaydata(bucketArr)
function displaydata(bucketArr){
  bucketArr.forEach(function(el,index){

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

   let removecart=document.createElement("button")
   removecart.setAttribute("id","remove_coffee")
   removecart.textContent="Remove"
   removecart.addEventListener("click",function(){
     removefunc(el,index)
   })

   upper.append(divimg,title,price,removecart)
   document.getElementById("menu").append(upper)
  })

}

function removefunc(el,index){
 bucketArr.splice(index,1)
 localStorage.setItem("bucket",JSON.stringify(bucketArr))
 window.location.reload()
}


function amount(){
 let sum=0;
  bucketArr.forEach(function(el){
   // console.log(el.price)
   sum+=el.price

  })

  document.getElementById("total_amount").textContent=sum
 }
 

amount()