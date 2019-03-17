/* slice method return a specified portion of the array into a new array
which behaves zero index based.
arg1 = the started point of the array indexed based
arg2 = end point of the array, ignores last index value, will print a 
range starting point up until entry before last point.
slice(arg1, arg2)

 */

let bodyParts = ['head', 'feet', 'eyes', 'mouth'];

//copies the entire array

// let newEntireCopy = bodyParts.splice(0);

// console.log(newEntireCopy);

// gets a range, 0 = head, 1 = feet 2 = eyes, eyes is ignored.

let arrayPortion = bodyParts.splice(0,2);

console.log(arrayPortion);

