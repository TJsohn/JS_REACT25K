/*
Create an HTML file with a <p> element and a button.
Write JavaScript to toggle the visibility of the paragraph each time the button is clicked.
 */

const paragraph = document.getElementById("content");
const toggleBtn = document.getElementById("button");

toggleBtn.addEventListener("click", () => {
  paragraph.style.display === "none"
    ? (paragraph.style.display = "block")
    : (paragraph.style.display = "none");
});
