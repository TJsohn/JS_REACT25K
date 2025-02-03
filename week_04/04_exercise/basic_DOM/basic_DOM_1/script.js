/* 
Use an HTML file with a <p> element that has the ID content.
Write JavaScript to select this element using getElementById.
Create a function that changes its text to "Hello, World!" when a button is clicked.
*/

const text = document.getElementById("content");
const button = document.getElementById("first_button");

console.log(text.textContent);
console.log(button.textContent);

function changeText() {
  console.log("Button was clicked");

  text.textContent = "Hello, World!";
  button.textContent = "I was clicked";
}
function changeBack() {
  text.textContent = "This is a coooool paragraph.";
}
