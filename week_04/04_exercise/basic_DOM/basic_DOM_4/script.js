/*
Create an HTML file with a <p> element and a button.
Write JavaScript to toggle the visibility of the paragraph each time the button is clicked.
 */

function toggleParagraph() {
  const paragraph = document.getElementById("content");
  if (paragraph.style.display === "none") {
    paragraph.style.display = "block";
  } else {
    paragraph.style.display = "none";
  }
}

document.getElementById("content").addEventListener("p", toggleParagraph);
