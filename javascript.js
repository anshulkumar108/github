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