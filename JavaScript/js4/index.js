console.log("I am a tutorial on Loops")

let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

for (let i = 0; i < 5; i++) { 
    console.log(a + i); 
}

let obj = {
    name: "Getha",
    role: "Programmer",
    company: "Creative AI"
}
 
for (const key in obj) {  //forin loop is used for object to print key and value(here it prints only key)

        console.log(key)
}


for (const key in obj) {   //forin loop used to print key and value
    
    const element = obj[key];
     console.log(key,element)
       
}

for (const c of "Harry") {  //forof loop used to print array /char
    console.log(c)
}

let b = 0;
while (b<6) {
    console.log(b)
    b++;
}

let i = 10;
do {
    console.log(i) //it prints 10 before going to condition
    i++;
} while (i<6);