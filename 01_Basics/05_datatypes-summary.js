// # Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideatemp = null 
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

//const bigNumber  = 3456264627462180872n // n rep bigint



// Reference (Non primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman" , "thor" , "hulk"];  // array
let myObj = {
    name: "Rushi",  // objects
    age: 20,
}

const myFunction = function(){ // object function
    console.log("Hello World");
}

console.log(typeof outsideatemp);





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "hiteshchoudharydotcom"

let anothername = myYoutubeName
anothername = "Chaiaurcode"

console.log(myYoutubeName);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upiId: "user@ybl"
}

let usertwo = userOne

usertwo.email = "hitesh@google.com" // objects can be accessed by " . "

console.log(userOne.email);
console.log(usertwo.email);