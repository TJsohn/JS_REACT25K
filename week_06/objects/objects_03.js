/* Task 1
Create a constructor function `User` that takes `username` and `email` as parameters.
It should create an object with these properties and a method `showInfo` that logs user details.
Instantiate a new user and call `showInfo()`.
*/

// Your code here
/*
function User(username, email) {
  this.username = username;
  this.email = email;

  this.showInfo = function () {
    console.log(`Username: ${this.username}, Email: ${this.email}`);
  };
}

const user1 = new User("Maggie", "maggie@gmail.com");

user1.showInfo(); */
/* Task 2
Modify Task 1: Use an ES6 `class` instead of a constructor function to define `User`.
Add a method `changeEmail(newEmail)` that updates the user's email.
*/

// Your code here
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  showInfo() {
    console.log(`Username: ${this.username}, Email: ${this.email}`);
  }

  changeEmail(newEmail) {
    this.email = newEmail;
    console.log(`Email updated to: ${this.email}`);
  }
}

const user1 = new User("Mike", "mike@hotmail.com");

user1.showInfo();

user1.changeEmail("newemail@hanmail.net");

user1.showInfo();

/* Task 3
Create an object `theme` with properties `name` (light or dark) and `isActive`.
Add a button in HTML. When clicked, toggle the theme between light and dark, updating the `isActive` property.
*/

// Your code here
const theme = {
  name: "light",
  isActive: false,
};

const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;

function toggleTheme() {
  if (theme.name === "light") {
    theme.name = "dark";
    theme.isActive = true;
    body.classList.add("dark");
    themeToggleButton.textContent = "Switch to Light Theme";
  } else {
    theme.name = "light";
    theme.isActive = false;
    body.classList.remove("dark");
    themeToggleButton.textContent = "Switch to Dark Theme";
  }
}

themeToggleButton.addEventListener("click", toggleTheme);
/* Task 4
Create an object `counter` with a `value` property.
Add two buttons in HTML: one to increase `value`, another to decrease it.
Display `value` in an HTML element and update it dynamically when buttons are clicked.
*/

// Your code here
const counter = { value: 0 };

const counterValueElement = document.getElementById("counter-value");
const increaseButton = document.getElementById("increase-btn");
const decreaseButton = document.getElementById("decrease-btn");

function updateCounterDisplay() {
  counterValueElement.textContent = counter.value;
}

function increaseCounter() {
  counter.value++;
  updateCounterDisplay();
}

function decreaseCounter() {
  counter.value--;
  updateCounterDisplay();
}

increaseButton.addEventListener("click", increaseCounter);
decreaseButton.addEventListener("click", decreaseCounter);

/* Task 5
Create an object `product` with `name`, `price`, and `quantity`.
Add an input field in HTML where the user can enter a quantity to purchase.
Update the `quantity` property and display the total price dynamically.
*/

// Your code here
const product = { name: "Cake", price: 10, quantity: 1 };

const purchaseQuantityInput = document.getElementById("purchase-quantity");
const totalPriceElement = document.getElementById("total-price");

function updateTotalPrice() {
  let enteredQuantity = parseInt(purchaseQuantityInput.value);

  if (isNaN(enteredQuantity) || enteredQuantity < 1) {
    product.quantity = 1;
    purchaseQuantityInput.value = 1;
  } else {
    product.quantity = enteredQuantity;
  }

  let totalPrice = product.quantity * product.price;

  totalPriceElement.textContent = totalPrice.toFixed(2);
}

purchaseQuantityInput.addEventListener("input", updateTotalPrice);

updateTotalPrice();

/* Task 6
Define a `Task` constructor that takes `title`, `description`, and `completed`.
Add a button in HTML that, when clicked, adds a new `Task` object to a `tasks` array and displays it on the page.
*/

// Your code here
function Task(title, description, completed) {
  this.title = title;
  this.description = description;
  this.completed = completed;
}

const tasks = [];

const taskTitleInput = document.getElementById("task-title");
const taskDescriptionInput = document.getElementById("task-description");
const addTaskButton = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

function addTask() {
  const title = taskTitleInput.value();
  const description = taskDescriptionInput.value();

  const newTask = new Task(title, description);
  tasks.push(newTask);

  taskTitleInput.value = "";
  taskDescriptionInput.value = "";
}

addTaskButton.addEventListener("click", addTask);

/* Task 7
Create an object `weatherApp` with a method `fetchWeather(city)`.
Use `fetch` to get weather data from an API and display it in an HTML element.
(API: OpenWeather or any free weather API)
*/

// Your code here

/* Task 8
Create a constructor function `Car` that takes `brand`, `model`, and `year`.
In the constructor, add a method `age()` that calculates the car’s age.
Instantiate a new `Car` and display its age on the webpage.
*/

// Your code here

/* Task 9
Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.
*/

// Your code here

/* Task 10
Create an object `shoppingList` with an array `items`.
Add an input field and button to allow users to add new items to `items` and display the updated list.
*/

// Your code here

/* Task 11
Create an array of `posts` where each post has `title`, `content`, and `likes`.
Add a "Like" button next to each post that increases the `likes` count and updates the display.
*/

// Your code here

/* Task 12
Create a constructor function `Employee` with `name`, `position`, and `salary`.
Add a method `increaseSalary(percent)` that increases the salary by a given percentage.
Create an employee and increase their salary dynamically.
*/

// Your code here

/* Task 13
Create an object `timer` with `seconds` and a method `start()` that counts seconds up.
Display the timer in an HTML element and update it every second.
*/

// Your code here

/* Task 14
Create a constructor function `Book` that takes `title`, `author`, and `pages`.
Create a simple book library that allows users to add books via an HTML form and displays them dynamically.
*/

// Your code here

/* Task 15
Create an object `foxTracker` with a `foxes` array.
Add an input field and button that allows users to add new foxes (with name and location) to the array.
Display the list of foxes dynamically in an HTML element.
*/

// Your code here
