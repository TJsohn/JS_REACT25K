/* 
Write a function named calculateAverageUntilZero:
- Continuously prompt the user to input numbers.
- Stop asking for inputs when the user enters 0.
- Calculate and log the average of all entered numbers in the console once the loop ends.
 */

// 1: Initialize a variable to store the sum of all numbers
// 2: Initialize a variable to store the count of numbers
// 3: Use a loop to prompt the user to input numbers
// 4: Check if the number is 0
// 5: If it is not 0, add it to the sum and increment the count
// 6: If it is 0, calculate the average and log it
// 7: log the average

const calculateAverageUntilZero = () => {
  let sum = 0;
  let count = 0;
  //let number;
  //let array = [];

  while (number !== 0) {
    let number = Number(prompt("Enter a number: "));
    if (number === 0) {
    }
    count++;
    //sum += number;
    //array.push(number);
  }
  console.log(sum / (array.length - 1));
};

calculateAverageUntilZero();
