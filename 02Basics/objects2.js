//const tinderUser = new Object() - singleton
const tinderUser = {} // - non singleton

tinderUser.id = "12345"
tinderUser.name = "Rohan"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    enaim : "rohan@gmail.com" ,
    fullname : { 
        userfullname : {
            firstname : "Rohan",
            lastname : "Salunkhe"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"d",5:"e",6:"f"}

//const obj3  = {obj1 , obj2}
//const obj3 = Object.assign({}, obj1 , obj2) // to merge objects


const obj3 = {...obj1, ...obj2}
//console.log(obj3);


const users = [
    {
        id : 1, email: "h@gmail.com"
    } ,
    {
        id : 1, email: "h@gmail.com"
    } ,
    {
        id : 1, email: "h@gmail.com"
    } ,
    {
        id : 1, email: "h@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename : "js in hindi" ,
    price : "999" ,
    courseInstructor : "hitesh"
}

//course.courseInstructor

const{courseInstructor : instructor} = course

//console.log(courseinstructor);
console.log(instructor);

// {
//     "name" : "hitesh" ,
//     "coursename" : "js in hindi",
//     "price" : "free"
// } 

[
    {},
    {},
    {}
]

