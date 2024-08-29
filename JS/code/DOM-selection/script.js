// There is one document in browser which contains all the code of html,css,js
// that object is called document
console.log(document)
// selection -- u can select an element
// from HTML to JS using 5 ways
console.log(document.getElementsByTagName('h1')[1])
console.log(document.getElementsByClassName('bujji')[0])
console.log(document.getElementById('chitti'))
console.log(document.getElementsByTagName('button')[0])
console.log(document.getElementsByClassName("btn")[0])
console.log(document.getElementById("btn1"))
console.log(document.querySelector('h1')) // it select only first element
console.log(document.querySelectorAll('.btn')) // select all elements

// DOM Manipulation
function myFun ()
{
const pa = document.getElementById("para")
pa.textContent = "hiiiiiiiiiiiiiiiiiiiii"
    console.log(pa.textContent) // won't consider CSS
    console.log(pa.innerText)     // also consider CSS
    pa.innerHTML = `<strong>Hiii</strong>`
}




