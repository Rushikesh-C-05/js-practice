
function sayMyName () {
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}

//sayMyName()

// function addTwoNumbers (num1 , num2) {
    
//    console.log( num1 + num2 );  
// }

function addTwoNumbers (num1 , num2) {
    
//    let reasult = num1 + num2 
//    return reasult;
        return num1 + num2
}

const reasult = addTwoNumbers(3 , 7)

//console.log("Reasult:" , reasult);


function LoginUser(username = "Sam") {
    if (!username) {
        console.log("Please enter your username");
        return
    }
    return `${username} just logged in`
}

//console.log(LoginUser("Rushi"));
//console.log(LoginUser("Rushi"));  //undefined


function calculateCartPrice (val1,val2,...num1) {
        return num1
}

console.log(calculateCartPrice(200,400,500));

const user = {
    username : "Rushi",
    prices : "999"
}

function handleObject (anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); 
}

// handleObject(user)
handleObject({
    username : "Sam" ,
    price : 399
})

const myNewArray = [2000,400,100,600]

function returnSecondValue (getArray) {
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));