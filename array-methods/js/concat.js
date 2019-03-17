// concat method allows to merge and consolidate multiple arrays into 1.

// let countries = ['italy', 'spain', 'hungary', 'ukraine'];
// let numbers = [10,5,1,9,6,4,2,0,3];
// let negativePositve = [2, -2, -5, -1, 3];

// //merge of arrays

// let mergedArrays = concat(countries, numbers, negativePositve);

// console.log(mergedArrays);

console.log('merge of nested multi dimension arrays');

let multiArray = [
    ['a', 'b', 'c', 'd'],
    ['e', 'f', 'g', 'h'],
    ['i', 'j', 'k', 'l']
];

// store the new consolidated multi dimension array into 1
let newArray = []

console.log(multiArray);

let migrate = newArray.concat(multiArray);

console.log(migrate);

