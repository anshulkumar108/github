//var a=document.getElementById('header-title')
//console.log(a)

var b=document.getElementsByClassName('list-group-item');
console.log(b)
console.log(b[1])
b[1].textContent= "kheer"
b[1].style.backgroundColor ="yellow"
b[1].style.fontWeight="bold"

//give error
//b.style.backgroundColor="pink"

for(var i=0 ;i<b.length;i++){
    b[i].style.backgroundColor="pink"
}


//TASK FOR EDING BACKGROUND COLOR OF 3RD ITEM.

// b[2].style.backgroundColor ="green"
// b[1].style.fontWeight="bold"
// for(var i=0 ;i<b.length;i++){
//     b[i].style.fontWeight="bold"
// }

/// try editing it with getelementbytagname

var li=document.getElementsByTagName('li')
console.log(li)
//console.log(li[1])
//li[1].textContent= "kheer"
//li[1].style.backgroundColor ="yellow"
//li[1].style.fontWeight="bold"

// for(var i=0 ;i<li.length;i++){
//     li[i].style.fontWeight="bold"
//     li[i].style.backgroundColor ="yellow"
// }

//QUERYSELECTOR

var input =document.querySelector('input')
input.value="hello world"

var header = document.querySelector('#main-header')
header.style.border="solid 2px blue"

var submit =document.querySelector('input[type="submit"]')
submit.value="SEND"
submit.style.backgroundColor="red"

var item=document.querySelector('.list-group-item')
item.style.backgroundColor="orange"

var lastitem=document.querySelector('.list-group-item:last-child')
lastitem.style.backgroundColor="purple"

var seconditem=document.querySelector('.list-group-item:nth-child(2)')
seconditem.style.backgroundColor="grey"