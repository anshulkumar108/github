let submit = document.getElementById('call'); // Get the submit button element

window.addEventListener("DOMContentLoaded", appointmentList)

submit.addEventListener('click', async (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    let obj = { name, email, phone };
    localStorage.setItem(email, JSON.stringify(obj));
//console.log(obj);
    try {
        const response = await axios.post('http://localhost:4000/', obj);
        document.getElementById('name').value = " ";
        document.getElementById('email').value = " ";
        document.getElementById('phone').value = " ";
    } catch (error) {
        console.log(error);
    }
    
});



async function appointmentList() {
    const details=document.getElementById('user')
   try{
    let  response =await axios.get("http://localhost:4000/")
    const ul=document.createElement('ul');
    let FetchData=response.data.usersDetails;
     console.log(FetchData)

     for (let i = 0; i < FetchData.length; i++) {
        let newli = document.createElement("li");
        
        newli.setAttribute("name", FetchData[i].userName);
        newli.setAttribute("email", FetchData[i].userEmail);
        newli.setAttribute("phone", FetchData[i].userContact);
        newli.setAttribute("id", FetchData[i].id);
        newli.appendChild(
            document.createTextNode(
                `name:${FetchData[i].userName}, email:${FetchData[i].userEmail}, phone:${FetchData[i].userContact}`
            )
        );
        let delbtn = document.createElement("button");
        let editbtn = document.createElement("button");
        editbtn.textContent = "edit";
        delbtn.textContent = "delete";
        newli.appendChild(delbtn);
        newli.appendChild(editbtn);
        ul.appendChild(newli);
        delbtn.addEventListener("click", delitem);
        editbtn.addEventListener("click", edititem);
    }
    details.appendChild(ul);
} catch (error) {
    console.log(error);
}

}

 async function edititem(e) {
	e.preventDefault();
	let listItem = e.target.parentElement;
	let id = listItem.getAttribute("id");
	let nameElement = listItem.getAttribute("name");
	let emailElement = listItem.getAttribute("email");
	let phoneElement = listItem.getAttribute("phone");
    name.value = nameElement;
	email.value = emailElement;
	phone.value = phoneElement;
	listItem.remove();
	try {
        await axios.delete(`http://localhost:4000/delete-users/${id}`);
        console.log("Deleted");
      } catch (error) {
        console.log(error);
      }
}

async function delitem(e) {
	e.preventDefault();
	let listItem = e.target.parentElement;
	let id = listItem.getAttribute("id");
	listItem.remove();
	try {
        await axios.delete(`http://localhost:4000/delete-users/${id}`);
        console.log("Deleted");
      } catch (error) {
        console.log(error);
      }
}

// function showDataOnScreen(user) {
//    ///console.log(user.userName);
//    document.getElementById('name').value = " ";
//    document.getElementById('email').value = " ";
//    document.getElementById('phone').value = " ";
   
//     const ul = document.getElementById('user');
//     const li = document.createElement('li');
//     li.className = 'user';
//     li.textContent = user.userName + ' ' + user.userEmail + ' ' + user.userContact;

//    //console.log(li.textContent)
//     let delbtn =createDeleteBtn(user.id);
//     let editbtn=createEditBtn();

//     li.appendChild(delbtn);
//     li.appendChild(editbtn);
//     ul.appendChild(li);
// }


// async function createDeleteBtn(userID) {
//     const delbtn = document.createElement('button');
//     delbtn.className = 'delbtn';
//     let delbtnText = document.createTextNode('DELETE');
//     delbtn.appendChild(delbtnText);

//     delbtn.addEventListener('click', async (event) => {
//         try {
//           const response = await axios.delete(`http://localhost:4000/user/delete-users/${userID}`);
//           console.log(response);
//           const li = event.target.parentElement;
//           const ul = li.parentElement;
//           ul.removeChild(li);
//         } catch (error) {
//           console.log(error);
//         }
//       });

//     return delbtn;
// }

// function createEditBtn(){
//     const editbtn = document.createElement('button');
//     editbtn.className = "editbtn";
//     let editbtnText = document.createTextNode('EDIT');
//     editbtn.appendChild(editbtnText);
//     return editbtn
// }

// function editUserDetails(userID,name,email,phone) {
//     document.getElementById('name').value = name;
//     document.getElementById('email').value = email;
//     document.getElementById('phone').value = phone;
//     console.log(13);
// }