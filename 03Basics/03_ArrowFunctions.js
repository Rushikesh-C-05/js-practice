const user = {
    username : "Rushi" ,
    Price : 999,

    welcomeMessage : function () {
        console.log(`${this.username}, welcome to website`); // to define scope this used   
        console.log(this); // always give current context
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

console.log(this);  // empty object

// function chai (){
//     let username = "Rushi"
//     console.log(this.username);  
// } // this can be work in object

// chai()

// const chai = function () {
//     let username = "Rushi"
//   console.log(this.username);
// }

const chai =   () => {
    let username = "Rushi"
  console.log(this);
}


//chai() 

// const addTwo = (num1 , num2) => {
//         return num1 + num2  // if curly braces are used return keyword is mandatory
// }

// const addTwo = (num1 , num2) =>  num1 + num2

// const addTwo = (num1 , num2) =>  (num1 + num2) // imp in react

const addTwo = (num1 , num2) =>  ({username : "Rushi"}) // () imp in object


console.log(addTwo (3 , 4));


// const myArr = [2,5,3,7,8]

// myArr.forEach()