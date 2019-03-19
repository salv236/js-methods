// concat method allows to merge and consolidate multiple arrays into 1.

// let countries = ['italy', 'spain', 'hungary', 'ukraine'];
// let numbers = [10,5,1,9,6,4,2,0,3];
// let negativePositve = [2, -2, -5, -1, 3];

// //merge of arrays

// let mergedArrays = concat(countries, numbers, negativePositve);

// console.log(mergedArrays);

console.log('merge of nested multi dimension arrays');

let multiArray = [           // ---> this is ONE array (contains other arrays). concat doesn't go deep into nested arrays
    ['a', 'b', 'c', 'd'],
    ['e', 'f', 'g', 'h'],
    ['i', 'j', 'k', 'l']
];

// store the new consolidated multi dimension array into 1
let newArray = []

console.log(multiArray);

let migrate = newArray.concat(multiArray);  //  ---> concat will just "stick" this ONE big array in whole onto the end of newArray

//further reading - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

//EXAMPLE OF A NESTED ARRAY
let normalArray = [0,1,2,3,4,5];

//nested
let nestedArray = [6, 7, [8,9, [10]]]; 

console.log(normalArray.concat(nestedArray));

