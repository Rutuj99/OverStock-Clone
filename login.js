 document.querySelector("#email").addEventListener("input", checkEmail);
var flag=true;
function checkEmail(event) {
    let ec =
      /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  
    if (ec.test(this.value)) {
      this.style.border = "2px solid green";
      ptoggle = 1;
      console.log(ptoggle);
    } else {
      this.style.border = "2px solid red";
    //   showError("Invalid email format");
      ptoggle = 0;
      console.log(ptoggle);
      flag=false;
      
    }
  }

  


function funclick(){
   
    var arr= JSON.parse(localStorage.getItem("account-data")) || [] 
    var x2=document.getElementById("email").value 
  var x3=document.getElementById("pass").value 
  if(x2==="" || x3===""){
    alert("fill all input data")
    return
  }

  var obj={
   
        email:x2,
        pass:x3
      }
      arr.push(obj)
    
      localStorage.setItem("account-data",JSON.stringify(arr))
      alert("Sign Up Successfull")
    


}


function funclick2(){

    var arr1= JSON.parse(localStorage.getItem("account-data")) || [] 
    var y2=document.getElementById("uemail").value 
    var y3=document.getElementById("upass").value
    var flag=false;
    arr1.map(function(elem){
        if(elem.email===y2 && elem.pass===y3){
          window.location.href = 'index.html';
          alert("Sign In successfull")
          flag=true;
        }
      })
                 
      if(flag==false){
        alert("wrong")
      }
        
}

