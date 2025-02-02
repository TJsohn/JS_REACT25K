/* 
Write a function named findMinMax:
- Ask the user how many numbers they want to input.
- Then prompt them to enter that many numbers.
- Once all numbers are entered, determine and log:
- The smallest number.
- The largest number.
Display the results in the console. 
*/

const findMinMax = () => {
  let input = Number(prompt("How many numbers you want to input?"));
  console.log(input);

  let count = 0;
  let numbers = [];

  while (count < input) {
    let enteredNumber = Number(prompt("Enter a number."));
    count++;
    numbers.push(enteredNumber);

    if (count === input) {
      break;
    }
  }
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);

  console.log("The smallest number: ", min);
  console.log("The largest number: ", max);
};

findMinMax();
