/* 
Write a function named askToContinue:
- Prompt the user to enter a number.
- Then, ask: "Do you want to continue giving numbers? (y/n)".
- If the user answers "y", ask for another number.
- If the user answers "n", stop asking and log the average of all entered numbers in the console. 
*/

const askToContinue = () => {
  let sum = 0;
  let count = 0;
  let number;
  let answer;

  while (answer !== "n") {
    number = prompt("Enter a number: ");

    sum += number;
    count++;

    answer = prompt("Do you want to continue giving numbers? (y/n)");

    if (answer === "n") {
      break;
    }
  }
};
