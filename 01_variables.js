const accountId = 14435
let accountEmail = "rushi123@gmail.com"
var password = "Rushi@112"
accountCity = "Pune"
let accountState;

// const = constant value can not change
// variable can declare in 2 ways 1)Let and 2)Var mostly Let used
//{} - known as scope

accountEmail = "hardytooz@gmail.com"
accountCity = "Dehlhi"
console.log(accountId);
console.log(accountCity);

/* Prefer Not to use Var Because of issue in block scope and functional scope*/

console.table([accountId,accountEmail,password,accountCity,accountState]);
/* To print values in form of table use console.table*/
