console.log("Harry")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red" //selected id box becomes red

// document.querySelector(".box").style.backgroundColor = "green"; // applies on first selector
console.log(document.querySelectorAll(".box")) 

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
}) 
console.log(document.getElementsByTagName("div"))  //returns HTML collection

console.log(document.getElementsByTagName("div")[0]) // first div
console.log(document.getElementsByTagName("div")[4]) // fifth div

let e=document.getElementsByTagName("div")
console.log(e[4].matches("#redbox"))

console.log(e[5].matches("#redbox"))