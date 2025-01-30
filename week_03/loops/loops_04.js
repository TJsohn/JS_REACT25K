/* 
Write a function named countEvenNumbers:
- Prompt the user to input 20 numbers one by one.
- After all numbers are entered, log how many of them were even.
Display the result in the console. 
*/

// step 1: Initialise a variable to store the count of even numbers.
// step 2: Use a loop to prompt the user to input 20 numbers one by one
// step 3: Check if the number is even
// step 4: If it is even, increment the count
// step 5: Log the count of even numbers.

const countEvenNumbers = () => {
  let count = 0;
  for (i = 0; i < 20; i++) {
    let number = Number(window.prompt("Enter a number: "));
    if (number % 2 === 0) {
      count++;
    }
  }
  console.log("The number of even numbers is: ", count);
  //alert("The count of even numbers: ", count);
};

countEvenNumbers();
