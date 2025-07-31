const heroses = ["thor" , "ironman" , "spider-man"]
const dc = ["superman" , "flash" , "batman"]

//heroses.push(dc)
// console.log(heroses); // array can be considerd as element
// console.log(heroses[3][1]);

//heroses.concat(dc)
//console.log(heroses); // same as up

//const allHeroes = heroses.concat(dc) // RUN IT AND SEE
//console.log(allHeroes);

const allNewHeroes = [...heroses , ...dc] // same work as concact
//console.log(allNewHeroes);

const AnotherArray = [1,2,3,[4,5,6],7,[4,5]]  
const real_Another_Array = AnotherArray.flat(Infinity) // gives vales combine in array
//console.log(real_Another_Array);


// console.log(Array.isArray("Rushi")); // checks the value
// console.log(Array.from("Rushi")); // converts value into array
// console.log(Array.from({name:"Rushi"})); // Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
