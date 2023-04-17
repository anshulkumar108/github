function myfunc(event) {
    event.preventDefault();
     var  inputName=document.getElementById('name').value;
     var  inputEmail=document.getElementById('email').value

    const mydata={
        inputName,
        inputEmail
    };

    axios.post("https://crudcrud.com/api/e981839b6782479f9c27c52a0cf332c3/appointment", mydata)
    .then((response)=>{
        showNewUserOnScreen(response.mydata)
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })

    

    // let myobj_serialized=JSON.stringify(mydata)
    // localStorage.setItem("data", myobj_serialized)

    const userList=document.querySelector('#users')
    const list=document.createElement('li')  
     list.appendChild(document.createTextNode( inputName + ' ' + inputEmail ))
     userList.appendChild(list)


      const myspan = document.createElement('button')
         myspan.className = 'btn float-right'
         myspan.innerHTML = 'DELETE';
         userList.appendChild(myspan)

         const close = document.querySelectorAll('button')
          for (let i = 0; i < close.length; i++) {
         close[i].addEventListener('click', () => {
             close[i].parentElement.style.display = 'none'
         })

        // const delButton= document.createElement('input')
        // delButton.type='button'
        // delButton.value='DELETE'

        // delButton.onclick = () =>{
        //    list.parentElement.style.display='none'
        //     localStorage.removeItem(mydata)
        //     userList.removeItem(list)
        // }
        // list.appendChild(delButton)
        // userList.appendChild(list)
    }
    const editbtn=document.createElement('input')
    editbtn.type='button'
    editbtn.value='EDIT'
    //console.log(editbtn)
   
    editbtn.className = 'btn float-right'
     editbtn.onclick= () =>{
         localStorage.removeItem(mydata.inputEmail)
         userList.removeChild(list)

         document.getElementById('email').value=mydata.inputEmail
         document.getElementById('name').value=mydata.inputName
     }
       list.appendChild(myspan)
       list.appendChild(editbtn)
       userList.appendChild(list)


}



