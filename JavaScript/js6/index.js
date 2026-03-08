console.log("This is strings tutorial")
let a = "Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length)

let real_name = "Riya"
let friend = "Rohan"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`)

let b = "ShivamSh"
console.log(b.toUpperCase())
console.log(b.toLowerCase()) 
console.log(b.length) 
console.log(b.slice(1, 5)) //includes b[1] to b[4]..b[5] not included
console.log(b.slice(1))    //includes b[1] to all char after b[1]

console.log(b.replace("Sh", "77"))   //only first SHh replaced with 77
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))

console.log(b) //after all chages string remained immutable..we cannot cahnge the strings,we can create new string but cannot change