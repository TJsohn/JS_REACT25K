/* Task 1
Create a constructor function `User` that takes `username` and `email` as parameters.
It should create an object with these properties and a method `showInfo` that logs user details.
Instantiate a new user and call `showInfo()`.
*/

// Your code here
function User(username, email) {
  this.username = username;
  this.email = email;

  this.showInfo = function () {
    console.log(`Username: ${this.username}, Email: ${this.email}`);
  };
}

const user = new User("Maggie", "maggie@gmail.com");

user.showInfo();

/* Task 2
Modify Task 1: Use an ES6 `class` instead of a constructor function to define `User`.
Add a method `changeEmail(newEmail)` that updates the user's email.
*/

// Your code here
class User2 {
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

const user2 = new User2("Mike", "mike@hotmail.com");

user2.showInfo();

user2.changeEmail("newemail@hanmail.net");

user2.showInfo();

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
class Task {
  constructor(title, description, completed) {
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
}

const addTaskBtn = document.getElementById("addTaskBtn");

function taskDisplay() {
  const task = new Task("Cleaning", "Organizing a walk-in closet", "completed");

  const tasks = [];

  tasks.push(task);

  const li = document.createElement("li");

  document.body.appendChild(li);

  li.textContent = `Task: ${tasks[0].title}, Description: ${tasks[0].description}, ${tasks[0].completed}`;
}

addTaskBtn.addEventListener("click", taskDisplay);

/* Task 7 - not done
Create an object `weatherApp` with a method `fetchWeather(city)`.
Use `fetch` to get weather data from an API and display it in an HTML element.
(API: OpenWeather or any free weather API)
*/

// Your code here
const weatherBtn = document.querySelector("#weatherBtn");

const weatherApp = {
  fetchWeather(city) {
    const apiKey = "0fc104f4910d341ed3c4a6709f2c6cc5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response not ok " + response.statusText);
        }
        return response.json();
      })

      .then((data) => {
        const tempCelsius = data.main.temp;
        const weatherDescription = data.weather[0].description;
        const humidity = data.main.humidity;

        displayWeather({
          name: data.name,
          temp: tempCelsius,
          description: weatherDescription,
          humidity: humidity,
        });
      })
      .catch((error) => {
        console.error("Fetching data failed:", error);
        document.getElementById("error-message").textContent =
          "Failed to fetch weather data.";
      });
  },
};

function displayWeather(data) {
  document.getElementById("error-message").textContent = "";
  document.getElementById("city-name").textContent = `Weather in ${data.name}`;
  document.getElementById(
    "temperature"
  ).textContent = `Temperature: ${data.temp}°C`;
  document.getElementById(
    "description"
  ).textContent = `Condition: ${data.description}`;
  document.getElementById(
    "humidity"
  ).textContent = `Humidity: ${data.humidity}%`;
}

weatherBtn.addEventListener("click", function () {
  const city = document.getElementById("city").value;
  weatherApp.fetchWeather(city);
});

/* Task 8
Create a constructor function `Car` that takes `brand`, `model`, and `year`.
In the constructor, add a method `age()` that calculates the car’s age.
Instantiate a new `Car` and display its age on the webpage.
*/

// Your code here
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;

  this.age = function age() {
    return (carAge = 2025 - this.year);
  };
}

const myCar = new Car("Kia", "Morning", 2021);

document.getElementById("car-age").textContent = `The ${myCar.brand} ${
  myCar.model
} is ${myCar.age()} years old.`;

/* Task 9
Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.
*/

// Your code here
const users = [
  { name: "TJ", score: 78 },
  { name: "Jake", score: 85 },
  { name: "Atte", score: 95 },
  { name: "Margot", score: 95 },
];

function sortAndDisplayList() {
  users.sort((a, b) => b.score - a.score);
  displayUsers();
}

function displayUsers() {
  const userList = document.querySelector("#userList");
  userList.innerHTML = "";

  users.forEach((user) => {
    let li = document.createElement("li");
    li.textContent = `Name: ${user.name}, Score: ${user.score}`;

    userList.appendChild(li);
  });
}

const sortingButton = document.querySelector("#sortingButton");
sortingButton.addEventListener("click", sortAndDisplayList);

displayUsers();

/* Task 10
Create an object `shoppingList` with an array `items`.
Add an input field and button to allow users to add new items to `items` and display the updated list.
*/

// Your code here
const shoppingList = {
  items: [],

  addItem(item) {
    if (item.trim() !== "") {
      this.items.push(item);
      this.displayList();
    }
  },

  displayList() {
    const listContainer = document.querySelector("#shoppingList");
    listContainer.innerHTML = "";

    this.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      listContainer.appendChild(li);
    });
  },
};

document.querySelector("#addItemBtn").addEventListener("click", () => {
  const newItem = document.querySelector("#newItem").value;
  shoppingList.addItem(newItem);
  document.querySelector("#newItem").value = "";
});

shoppingList.displayList();

/* Task 11
Create an array of `posts` where each post has `title`, `content`, and `likes`.
Add a "Like" button next to each post that increases the `likes` count and updates the display.
*/

// Your code here
const posts = [
  { title: "Diary", content: "my own story", likes: 0 },
  { title: "Poem", content: "famous poems", likes: 10 },
  { title: "Essay", content: "my own essay", likes: 20 },
];

const postsList = document.querySelector("#posts");

const displayPosts = () => {
  postsList.innerHTML = "";
  posts.forEach((post, index) => {
    const postItem = document.createElement("li");
    const postTitle = document.createElement("p");
    const postContent = document.createElement("p");
    const postLikes = document.createElement("p");
    const likeBtn = document.createElement("button");

    likeBtn.textContent = "Like";

    likeBtn.addEventListener("click", () => {
      posts[index].likes++;
      displayPosts();
    });

    postItem.append(postTitle, postContent, postLikes, likeBtn);
    postsList.appendChild(postItem);

    postTitle.textContent = `Title: ${post.title}`;
    postContent.textContent = `Content: ${post.content}`;
    postLikes.textContent = `Likes: ${post.likes}`;
  });
};

displayPosts();

/* Task 12
Create a constructor function `Employee` with `name`, `position`, and `salary`.
Add a method `increaseSalary(percent)` that increases the salary by a given percentage.
Create an employee and increase their salary dynamically.
*/

// Your code here
function Employee(name, position, salary) {
  this.name = name;
  this.position = position;

  this.increaseSalary = function (percent) {
    return (this.salary = (salary * percent) / 100 + salary);
  };
}

const employee = new Employee("TJ", "Developer", 1000);

console.log(employee.increaseSalary(10));
console.log(employee.increaseSalary(20));

/* Task 13
Create an object `timer` with `seconds` and a method `start()` that counts seconds up.
Display the timer in an HTML element and update it every second.
*/

// Your code here
const timer = {
  seconds: 0,
  start() {
    this.seconds++;
  },
};

const displayTimer = () => {
  document.querySelector("#timer").textContent = timer.seconds;
};

displayTimer();

setInterval(() => {
  timer.start();
  displayTimer();
}, 1000);

/* Task 14
Create a constructor function `Book` that takes `title`, `author`, and `pages`.
Create a simple book library that allows users to add books via an HTML form and displays them dynamically.
*/

// Your code here
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const library = [];

function displayBooks() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = "";

  library.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.innerHTML = `<p>${book.title} by ${book.author}, ${book.pages} pages</p>`;
    libraryDiv.appendChild(bookDiv);
  });
}

document
  .getElementById("book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const pages = document.getElementById("pages").value.trim();

    if (title && author && pages) {
      const newBook = new Book(title, author, pages);
      library.push(newBook);
      displayBooks();

      document.getElementById("book-form").reset();
    }
  });

/* Task 15
Create an object `foxTracker` with a `foxes` array.
Add an input field and button that allows users to add new foxes (with name and location) to the array.
Display the list of foxes dynamically in an HTML element.
*/

// Your code here
const foxTracker = {
  foxes: [],

  addFox(name, location) {
    if (name && location) {
      this.foxes.push({ name, location });
      this.updateFoxList();
    }
  },

  updateFoxList() {
    const list = document.getElementById("foxList");
    list.innerHTML = "";

    this.foxes.forEach((fox) => {
      const li = document.createElement("li");
      li.textContent = `${fox.name} - ${fox.location}`;
      list.appendChild(li);
    });
  },
};

document.getElementById("addFox").addEventListener("click", () => {
  const name = document.getElementById("foxName").value.trim();
  const location = document.getElementById("foxLocation").value.trim();

  if (name && location) {
    foxTracker.addFox(name, location);
    document.getElementById("foxName").value = "";
    document.getElementById("foxLocation").value = "";
  }
});
