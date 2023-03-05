var itemlist=document.querySelector('#items')
//PARENT NODE
// console.log(itemlist.parentNode)
// itemlist.parentNode.style.backgroundColor="grey"
// console.log(itemlist.parentNode.parentNode)
// itemlist.parentNode.parentNode.style.backgroundColor="lightblue"
// console.log(itemlist.parentNode.parentNode.parentNode)
// itemlist.parentNode.parentNode.parentNode.style.backgroundColor="pink"

//PARENT ELEMENT
// console.log(itemlist.parentElement)
// itemlist.parentElement.style.backgroundColor="grey"
// console.log(itemlist.parentElement.parentElement)
// itemlist.parentElement.parentElement.style.backgroundColor="lightblue"
// console.log(itemlist.parentElement.parentElement.parentElement)
// itemlist.parentElement.parentElement.parentElement.style.backgroundColor="pink"



// //CHILD NODE : this take empty spaces also.
// console.log(itemlist.childNodes)

// //childern will take empty space .it gives only itemlist.
// console.log(itemlist.children)
// itemlist.children[1].style.backgroundColor="orange"

// //FIRST CHILD NODE : this take empty spaces also.
// console.log(itemlist.firstChild)

// //childern will take empty space .it gives only itemlist.
// console.log(itemlist.firstElementChild)
// itemlist.firstElementChild.style.backgroundColor="magenta"

// //FIRST CHILD NODE : this take empty spaces also.
// console.log(itemlist.lastChild)

// //childern will take empty space .it gives only itemlist.
// console.log(itemlist.lastElementChild)
// itemlist.lastElementChild.style.backgroundColor="purple"

// //nextSibling
// console.log(itemlist.nextSibling)
// //nextElementSibling
// console.log(itemlist.nextElementSibling)

// //previousSibling
// console.log(itemlist.previousSibling)
// //nextElementSibling
// console.log(itemlist.previousElementSibling)

//CREATE ELEMENT

var newdiv=document.createElement('div')


//addclass
newdiv.className="hello"

//addid
newdiv.id="hi"

//addAttribute
newdiv.setAttribute('title','john')

//createnewDivText  createtextNode

var newdivText=document.createTextNode("hello developer")

newdiv.appendChild(newdivText)

var container=document.querySelector('header .container')
var h1=document.querySelector('header h1')

console.log(newdiv)
newdiv.style.fontSize="30px"
container.insertBefore(newdiv,h1)



//<div class="hello" id="hi" title="john"> </div>


