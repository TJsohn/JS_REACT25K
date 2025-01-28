/* 
1. Create two variables, a and b, and assign them integer values (e.g., 8 and 3).
2. Perform the following operations using a and b, and store the results in separate variables:
 - Add the values (sum).
 - Subtract b from a (difference).
 - Multiply the values (product).
 - Divide a by b (quotient).
 - Find the remainder when a is divided by b (remainder).
3. Use console.log() to print the results of each operation. For example, print: "The sum of a and b is: 11"
4. Add comments to explain what each operation does.
5. Change the values of a and b and observe how the results change.
6. Try the same operations with one positive and one negative number.
*/

//1.
const a = 8; // Creating a variable a and assigning it an integer value 5
const b = 3; // Creating a varialbe b and assigning it an integer value 3

//2 & 3.
const sum = a + b; // Adding the values using a and b and storing the result in a variable 'sum'
console.log("The sum of a and b is:", sum); // printing the results

const difference = a - b; // Substracting b from a and storing the result in a variable 'difference'
console.log("The difference of a and b is:", difference); // printing the results

const product = a * b; // Storing the result in a variable "product" by multiplying a and b
console.log("The product of a and b is:", product); // printing the result

const quotient = a / b; // Storing the result in a variable "quotient" by dividing a by b
console.log("The quotient of a by b is:", quotient); // printing the result

const remainder = a % b; // storing the result in a variable "remainder" of the remainder when a is divided by b
console.log("The remainder when a is divided by b is:", remainder); //printing the result
