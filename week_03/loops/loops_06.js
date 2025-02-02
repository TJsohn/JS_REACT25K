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
  let answer = "";

  //let response;

  while (answer !== "n") {
    let number = Number(prompt("Enter a number: "));

    sum += number;
    count++;

    answer = prompt("Do you want to continue giving numbers? (y/n)");
    if (answer === "n") {
      break;
    }

    if (answer !== "y") {
      alert("Please enter a valid answer.");
    }
  }
  console.log("The average of all entered numbers:", sum / count);
};

askToContinue();
