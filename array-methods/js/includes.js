// includes methos returns true or false if it finds/doesnt find a value within an array

let numbers = [1,2,3,4,5];

// returns false with multi integer values that eist
console.log(numbers.includes(1,2));

let strongs = ["salvatore", "rosa", "rosina", "giuseppe"];

// returns true with mult string values that exist
console.log(strongs.includes("giuseppe", 'rosa'));