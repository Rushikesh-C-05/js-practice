// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);  // object

//let myCreatedDate = new Date(2025 , 0 , 23)
//let myCreatedDate = new Date(2023,0,23,5,3)
let myCreatedDate = new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleDateString());

let mYtimeStamp = Date.now();
console.log(mYtimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.round(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

 `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday : "Long"
})
