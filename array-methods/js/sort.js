// sorts array content alphabetically or numerically

// !!!  sorts items as strings, needs helper function for numbers !!!

let countries = ['italy', 'spain', 'hungary', 'ukraine'];
let numbers = [10,5,1,9,6,4,2,0,3];
let negativePositve = [2, -2, -5, -1, 3];

countries.sort();
console.log(countries);

numbers.sort(); // use helper function
//[0, 1, 10, 2, 3, 4, 5, 6, 9] ??
console.log(numbers);

negativePositve.sort(); // use helper function
// [-1, -2, -5, 2, 3] ??
console.log(negativePositve);
