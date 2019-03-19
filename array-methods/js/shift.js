// removes the first item in the array which causes the indexes to be readapted
// further reading - https://www.w3schools.com/jsref/jsref_shift.asp

let animals = ['dog', 'cat', 'monkey', 'gerbil'];  

animals.shift(); // cat  = 0, monkey = 1, gerbil = 2


// should print out cat, monkey, gerbil
console.log(animals);
