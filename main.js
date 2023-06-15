var form = document.getElementById('addForm')
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
//var addCategory=document.getElementById('addForm')

//form submit event
form.addEventListener('submit', addItem)

// Delete event
itemList.addEventListener('click', removeItem)

// //adding edit button
// itemList.addEventListener('click', editBtn)

// Filter event
filter.addEventListener('keyup', filterItems);
// Add item
function addItem(e) {
    e.preventDefault()
    //get input value
    var newitem = document.getElementById('item').value

    //create new li element
    var li = document.createElement('li')

    //add className
    li.className = "list-group-item"
    // console.log(li)

    //add text node with input value
    li.appendChild(document.createTextNode(newitem))

    var description = document.getElementById('description').value
    var descriptionNode = document.createTextNode(" " + description)
    li.appendChild(descriptionNode)

    //create delete btn
    var deletebtn = document.createElement('button')


    //add classes to delete btn
    deletebtn.className = "btn btn-danger btn-sm float-right delete"

    //append text node
    deletebtn.appendChild(document.createTextNode("X"))

    //append li with btn
    li.appendChild(deletebtn)

    //append li to list
    itemList.appendChild(li)

    // //create delete btn
     var editbtn = document.createElement('button')


     //add classes to delete btn 
       editbtn.className = "edit"

     li.appendChild(editbtn)

     itemList.appendChild(li)
}



// remove item function
function removeItem(e) {
    e.preventDefault();
    //console.log(1);
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }

    }
}

// Filter Items
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase()
    //console.log(text)
    // Get lis
    var items = itemList.getElementsByTagName('li');
    //console.log(items)
    // Convert to an array
    Array.from(items).forEach(function (item) {
        const itemName = item.firstChild.textContent;
        const description = item.childNodes[1].textContent;
        if (itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

        // var inp=document.createElement('input')
        // inp.className='form-control mr-2'
        // //console.log(inp)

        // form.append(inp)


        function clearerror() {
            errors = document.getElementsByClassName('formerror');
            for (let item of errors) {
                item.innerHTML = " ";
            }
        }
        
        function seterror(id, error) {
            element = document.getElementById(id);
            element.getElementsByClassName('formerror')[0].innerHTML = error;
        }

        // var returnval = true;
    // //perform validation if validation fails ,set values of returnval to false
    // var name = document.forms['bookingApp']["name"].value; //document.forms will bring all forms
    // //console.log(name);
    // if (name.length < 5) {
    //     seterror('name', ' *length is too short');
    //     returnval = false;
    //     return returnval;
    // }

    // var email = document.forms['bookingApp']["email"].value;
    // if (email.length > 20) {
    //     seterror('email', ' *length is too long');
    //     returnval = false;
    //     return returnval;
    // }