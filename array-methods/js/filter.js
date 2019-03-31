// makes a new array which enable you to strip out what is required
// further readng - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

let values = [2, 4.5, 9, 3.6, 7.2];

const newValues = values.filter(value => Number.isInteger(value)
&& Number.isInteger(value) >=0);
console.log(newValues);

