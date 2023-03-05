var form = document.getElementById('addForm')
var itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem)

// Delete event
itemList.addEventListener('click',removeItem)



// Add item
function addItem(e) {
    e.preventDefault();

    //get input value
    var newitem = document.getElementById('item').value

    //create new li element
    var li = document.createElement('li')

    //add className
    li.className = "list-group-item"

    console.log(li)

    //add text node with input value
    li.appendChild(document.createTextNode(newitem))

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

//adding edit button
itemList.addEventListener('click', editBtn)

//create delete btn
var editbtn = document.createElement('button')


//add classes to delete btn
editbtn.className = "edit"

li.appendChild(editbtn)

itemList.appendChild(li)

   
}  



    // remove item function
function removeItem(e){
    e.preventDefault();
    //console.log(1);

    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
          var li = e.target.parentElement;
          itemList.removeChild(li);
        }
      }

}