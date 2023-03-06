function myfunc(event) {
  event.preventDefault();
  //console.log(1);

  var inputName = document.getElementById('name').value;
  //console.log(inputName)
  localStorage.setItem('name', inputName)
  var inputEmail = document.getElementById('email').value;
  //console.log(inputEmail)
  localStorage.setItem('email', inputEmail)

  let mydata = {
       inputName,
    inputEmail
  };
  let myobj_serialized=JSON.stringify(mydata)

  localStorage.setItem("data", myobj_serialized)
 


}



// let mmyobj={
//   name:"Anshul",
//   age: 56
// };

// //to convert into string we used JSON.stringify
// let myobj_serialized=JSON.stringify(mmyobj)


// localStorage.setItem('myobj' , myobj_serialized)
// //console.log(localStorage)


// //this will return Array from string
// let myobj_deserialized= JSON.parse(localStorage.getItem('myobj'));
// console.log(myobj_deserialized)
