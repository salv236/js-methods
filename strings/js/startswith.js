// returns a boolean true/false if a it ends with a particluar string
// further reading https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith

let value = 'me myself and i'

let output = value.startsWith('me');
output = value.startsWith('myself', 3);

console.log(output);