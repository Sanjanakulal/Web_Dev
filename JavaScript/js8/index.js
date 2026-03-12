let arr = [1, 2, 4, 5, 7]
//  Index  0, 1, 2, 3, 4

arr[0] = 5666; //array is mutable we can change array
console.log(arr, typeof arr);
console.log(arr.length)

console.log(arr[0])
console.log(arr[2])
console.log(arr[4])

console.log(arr.toString())    //to convert into string ie.5666,1,2,4,5,7
console.log(arr.join(" and "))
console.log(arr.join(" - "))

console.log(arr.pop()) //pops or delete the last number
console.log(arr)

console.log(arr.push(100)) //adds it to last
console.log(arr)

console.log(arr.push("sanju"))
console.log(arr)

console.log(arr.shift()) //shift removes first value similar like pop
console.log(arr)

console.log(arr.unshift("ram")) //adds it to first similar like push
console.log(arr)

console.log(delete arr[5])  //true [ 'ram', 2, 4, 5, 100, <1 empty item> ]
console.log(arr)
console.log(arr.length)

let a1 =[1,2,3]
let a2=[4,5,6]
let a3=[7,8,9]
console.log(a1.concat(a2,a3))  //return new array and soes not chang existing array

let a=[7,2,8,4]
console.log(a.sort()) //sorts and changes the existing array

 
let numbers = [1, 2, 3, 4, 5] 
console.log(numbers.splice(1, 2))  //begin with index1 remove index 1 including it next 2 position means,index1 and index2
console.log(numbers)   
console.log(numbers.splice(1, 3)) //since arry using output array there i sno 3 position to splice
console.log(numbers)
console.log(numbers.splice(1, 3, 222, 333)) //[1, 222, 333, 5] spice changes original array

let num=[1,2,3,4,5]
console.log(num.slice(2))  //[ 3, 4, 5 ] removed 1,2 not included 3 slice does not changes original array

console.log(num.reverse())