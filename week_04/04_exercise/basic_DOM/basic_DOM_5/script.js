/*
Create an HTML file with:
- A <button> to change the background color.
- A <input> field for users to enter a color.
- A <p> element where the text color changes based on the input.

Write JavaScript to:
- Change the background color to a random color when the button is clicked.
- Update the paragraph’s text color to match the user’s input valu
*/
function changeBGColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);

  let bgColor = `rgb(${x},${y},${z})`;

  document.body.style.backgroundColor = bgColor;

  console.log(bgColor);

  document.body.style.background = bgColor;
}

changeBGColor();

function changeTextColor() {}
