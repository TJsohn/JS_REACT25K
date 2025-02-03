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
  let sum = 0,
    count = 0;

  while (true) {
    let num = parseFloat(prompt("Enter a number (0 to stop):"));
    if (num === 0) break;
    sum += num;
    count++;
  }
  console.log(`Average: ${sum / count}`);
};

calculateAverageUntilZero();
