console.log("Hello world")


//in console
document.body.childNodes[1]

document.body.childNodes[1].childNodes   
// NodeList(13) [text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]


 document.body.firstElementChild.style.color="red"

document.body.firstElementChild             // <div class="container">
document.body.firstElementChild.childNodes //NodeList(13) [text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
document.body.firstElementChild.children   // HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
document.body.firstElementChild.children[0]
document.body.firstElementChild.children[1]
document.body.firstElementChild.children[3].nextElementSibling //box5
document.body.firstElementChild.children[3].previousElementSibling //box3
document.body.firstElementChild.children[3].previousSibling //#text
document.body.firstElementChild.children[3].parentElement //container

document.body.children //div.container,table
document.body.children[1].rows //[tr,tr]