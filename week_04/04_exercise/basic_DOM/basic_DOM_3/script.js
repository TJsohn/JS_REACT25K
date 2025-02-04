/*
Create an HTML file with an <input> field and a <div> with the ID displayText.
Write JavaScript to:
- Continuously update the <div> with the input field's value as the user types.
- Use the input event for real-time updates.
*/

function showLiveText(event) {
  document.getElementById("displayText").textContent =
    "You typed: " + event.target.value;
}

document.getElementById("inputText").addEventListener("input", showLiveText);
