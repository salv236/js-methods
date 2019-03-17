/* splice is a customizable methis that allows you to manipulate an array
   arg1 = number of elements not zero index based
   arg2 = number of elements to delete
   arg3 = the values you would like to insert in the array
   splice(arg1, arg2, arg3)*/

let bodyParts = ['head', 'feet', 'eyes', 'mouth'];

// adds 2 entries after feet
bodyParts.splice(2,0, 'toes', 'shins'); // head, feet, toes, shins, eyes, mouth,

console.log(bodyParts);
console.log('remove and add an entry');

// after the 3rd element remove 1 entry and replace with another
bodyParts.splice(3,1, 'calves'); // head, feet, toes, calves, eyes, mouth,

console.log(bodyParts);

//delete multiple entries

bodyParts.splice(4,2);
console.log(bodyParts);