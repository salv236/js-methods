// removes the first item in the array which causes the indexes to be readapted

let animals = ['dog', 'cat', 'monkey', 'gerbil'];  

animals.shift(); // cat  = 0, monkey = 1, gerbil = 2
//outputs the first removed entry which should be dog
console.log(animals.shift());
// should print out cat, monkey, gerbil
console.log(animals);