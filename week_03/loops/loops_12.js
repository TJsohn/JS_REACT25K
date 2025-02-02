/* 
Write a function named buildGroceryList:
- Prompt the user to input grocery items one by one.
- Stop when the user types "done".
Log the complete grocery list in the console.
 */

const buildGroceryList = () => {
  let input;
  while (input !== "done") {
    let input = prompt("Input a grocery item. Type done when you stop.");
    if (input === "done") {
      break;
    }
    console.log(input);
  }
};

buildGroceryList();
