/* 
Create an HTML file with a button and a counter display.
Write JavaScript to count and display the number of times the button is clicked. 
*/

let count = 0;
const button = document.getElementById("clickButton");
const counterDisplay = document.getElementById("counter");

button.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = `Clicks: ${count}`;
});
