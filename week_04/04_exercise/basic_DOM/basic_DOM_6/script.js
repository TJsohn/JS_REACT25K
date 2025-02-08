/* 
Create a form with a required name and email field.
Write JavaScript to:
- Prevent form submission if either field is empty.
- Display an error message if fields are missing. 
*/

const validateForm = (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("userEmail").value;
  const errorMessage = document.getElementById("errorMessage");

  if (username === "") {
    errorMessage.textContent = "Name is required.";
    return;
  }

  if (email === "") {
    errorMessage.textContent = "Email is required.";
    return;
  }
  errorMessage.textContent = "Submitted!";
};

document.getElementById("submitForm").addEventListener("submit", validateForm);
