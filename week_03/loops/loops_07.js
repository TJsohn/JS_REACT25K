/* 
Write a function named sumAndAverage:
- Ask the user to input ten numbers.
- Calculate and log:
    - The sum of the numbers.
    - The average of the numbers.
    - The smallest and largest numbers.
Display all results in the console.
*/

const sumAndAverage = () => {
  let count = 0;
  let sum = 0;
  let numbers = [];

  while (count < 10) {
    let input = Number(prompt("Enter a number: "));

    sum += input;
    count++;
    numbers.push(input);

    if (count === 10) {
      break;
    }
  }
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);

  console.log("The sum of the numbers:", sum);
  console.log("The average of the numbers:", sum / count);
  console.log("The smallest number:", min);
  console.log("The largest number:", max);
};

sumAndAverage();
