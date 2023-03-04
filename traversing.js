var itemlist=document.querySelector('#items')
//PARENT NODE
console.log(itemlist.parentNode)
itemlist.parentNode.style.backgroundColor="grey"
console.log(itemlist.parentNode.parentNode)
itemlist.parentNode.parentNode.style.backgroundColor="lightblue"
console.log(itemlist.parentNode.parentNode.parentNode)
itemlist.parentNode.parentNode.parentNode.style.backgroundColor="pink"
