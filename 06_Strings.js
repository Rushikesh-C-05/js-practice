const name = "Rushi"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Rushikesh-RC')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('s'));

 const newString = gameName.substring(0 , 4)
 console.log(newString);
 
 const anotherString = gameName.slice(-8, 9)
 console.log(anotherString);
 
 const newStringOne = "      hitesh    "
 console.log(newStringOne);
 console.log(newStringOne.trim()); // trim have trim start and trim end fun
 
 const url = "https://hitesh.com/hitesh%20choudhary"

 console.log(url.replace('%20' , '-'));

 console.log(url.includes('hitesh'));

 console.log(gameName.split('-'));
 