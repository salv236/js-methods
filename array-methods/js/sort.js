// sorts array content alphabetically or numerically

let countries = ['italy', 'spain', 'hungary', 'ukraine'];
let numbers = [10,5,1,9,6,4,2,0,3];
let negativePositve = [2, -2, -5, -1, 3];

console.log(countries.sort());
//[0, 1, 10, 2, 3, 4, 5, 6, 9] ??
//console.log(numbers.sort());
// [-1, -2, -5, 2, 3] ??
//console.log(negativePositve.sort());

//https://www.w3schools.com/jsref/jsref_sort.asp
/* num1 represent highest value, num2 represents lowest
   by subtracting num1 - num2 gives a negative number
   which turns num1 < num2*/

numbers.sort(function(num1, num2){
    return num1 - num2;
});

console.log(numbers); //// [-1, -2, -5, 2, 3] ??

negativePositve.sort(function(num1, num2){
    return num1 - num2;
});

console.log(negativePositve);
