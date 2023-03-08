function myfunc(event) {
    event.preventDefault();
     var  inputName=document.getElementById('name').value;
     var  inputEmail=document.getElementById('email').value
    const mydata={
        inputName,
        inputEmail
    };

    let myobj_serialized=JSON.stringify(mydata)
    localStorage.setItem("data", myobj_serialized)

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
    }
}