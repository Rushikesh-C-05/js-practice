// array

const myArray = [0,1,2,3,4,5,6,7,8,9] // js arrays are resizable
const myHeros = ["Shaktiman" , "Krish" , "FlyingJeet"]

const MyArr2 = new Array(1,2,3,4)
// console.log(myArray[0]);
// console.log(MyArr2[1]);

// Array Methods

myArray.push(10)
myArray.pop() // always remove last value

myArray.unshift(12) // insert element at 1st index of array
myArray.shift() // remove element at 1st index of array
// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));
// console.log(myArray.indexOf(9));

const newArr = myArray.join()

// console.log(myArray);
// console.log(typeof newArr);


// slice , spice

console.log("A" , myArray);

const myn1 = myArray.slice(1 , 3)

console.log(myn1);
console.log("B" , myArray);


const myn2 = myArray.splice(1,3)
console.log("C" , myArray);
console.log(myn2);

