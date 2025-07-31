// singleton - made with constructor is always singletonconst

// Object Literals
//Object.create - made using constructor

const mySym = Symbol ("key1")
const JsUser = {
    name: "Rushi" ,
    "full name" : "Rushi Choudhari" ,
    [mySym] : "myKey1" ,
    age : 21,
    Location : "Pune" , 
    email : "georgie@gmail.com" ,
    isLoggedIn : false ,
    LastLoggedIn : ["Monday" , "Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); // way to call symbol ask in interview

JsUser.email = "harrybrook@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "harrypotter@gmail.com"
//console.log(JsUser);

JsUser.greetings = function() {
    console.log("Hello Js Users");
}

JsUser.greetings2 = function() {
    console.log(`Hello Js Users ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetings2());


