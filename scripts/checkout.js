let form=document.getElementById("form")
  form.addEventListener("submit",userdetail)

  function userdetail(){
    event.preventDefault()
    let name=form.name.value;
    let number=form.number.value;
    let address=form.address.value;
    if(name==="" || number===""|| address===""){
     
      alert("Please fill all details")
    }
    else{
      
   
      alert("Your order is accepted")
     
     setTimeout(function(){
      alert("Your order is being Prepared")
     },3000)
     setTimeout(function(){
      alert("Your order is being packed")
     },8000)
     setTimeout(function(){
      alert("Your order is  out for delivery")
     },10000)
     setTimeout(function(){
      alert("Order delivered")
     },12000)
     return
   

    }
  }

  //  function notification(){
  //   event.preventDefault()
  //     alert("Your order is accepted")
     
  //    setTimeout(function(){
  //     alert("Your order is being Prepared")
  //    },3000)
  //    setTimeout(function(){
  //     alert("Your order is being packed")
  //    },8000)
  //    setTimeout(function(){
  //     alert("Your order is  out for delivery")
  //    },10000)
  //    setTimeout(function(){
  //     alert("Order delivered")
  //    },12000)
  //    return
  //  }
  