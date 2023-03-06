function myfunc(event){
  event.preventDefault();
  //console.log(1);
  
    

    if(inputName===" " || inputEmail===" "){
      alert("Fill both details")
    }else{
      var inputName= document.getElementById('name').value;
      //console.log(inputName)
     localStorage.setItem('name',inputName)

       var inputEmail= document.getElementById('email').value;
      //console.log(inputEmail)
      localStorage.setItem('email',inputEmail)
    }
      inputName=" ";
      inputEmail=" ";
  
}