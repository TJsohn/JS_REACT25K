/* Create a function named add that:
Takes two parameters, a and b.
Returns the sum of a and b.
Call the function with the arguments 10 and 5.
Print the result using console.log(). 

Bonus: Call the function multiple times with different arguments and print all the results.
*/

const add = (a, b) => {
  return a + b;
};

let result = add(10, 5);
console.log(result);

console.log("Added: ", add(4, 5)); //9
console.log("Added: ", add(6, 2)); //8
console.log("Added: ", add(3, 7));
