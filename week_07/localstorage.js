/* Task 1
Store a string `"Hello, LocalStorage!"` in LocalStorage under the key `"message"`.
Retrieve it and log it to the console.
*/

// Your code here
localStorage.setItem("message", "Hello, LocalStorage!");

const storedMessage = localStorage.getItem("message");

console.log(storedMessage);
/* Task 2
Create an object `userSettings` with:
- `theme` ("dark" or "light")
- `language` ("English", "Spanish", etc.)

Convert it to a JSON string and store it in LocalStorage.
Retrieve it, parse it, and log the `theme` property.
*/

// Your code here
const userSettings = {
  theme: "dark",
  language: "Spanish",
};

localStorage.setItem("userSettings", JSON.stringify(userSettings));

const userSettingsData = JSON.parse(localStorage.getItem("userSettings"));
console.log(userSettingsData.theme);

/* Task 3
Define an array `favoriteBooks` with at least three book objects (`title` and `author`).
Store the array in LocalStorage.
Retrieve and parse it, then log the titles of all books.
*/

// Your code here
const favoriteBooks = [
  { title: "1984", author: "Owell" },
  { title: "Norwegian Woods", author: "Murakami" },
  { title: "Vegetarian", author: "Han Kang" },
];

localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
const favoriteBooksData = JSON.parse(localStorage.getItem("favoriteBooks"));
favoriteBooksData.forEach((book) => console.log(book.title));

/* Task 4
Write a function `saveToLocalStorage(key, object)` that:
- Converts an object to JSON.
- Stores it in LocalStorage under the provided key.
Test it by saving an object and retrieving it.
*/

// Your code here
function saveToLocalStorage(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}

saveToLocalStorage("animal", { breed: "Pig", age: 3 });
const animal = JSON.parse(localStorage.getItem("animal"));
console.log(animal);

/* Task 5
Write a function `getFromLocalStorage(key)` that:
- Retrieves a value from LocalStorage.
- Parses it if it's JSON.
- Logs the retrieved value.
*/

// Your code here
localStorage.setItem("userdata", JSON.stringify({ name: "Tei", age: 30 }));

function getFromLocalStorage(key) {
  const retrievedValue = localStorage.getItem(key);

  if (retrievedValue) {
    const parsedValue = JSON.parse(retrievedValue);
    console.log(parsedValue);
  } else {
    console.log(key);
  }
}

getFromLocalStorage("userdata");

/* Task 6
Create an object `userProfile` with:
- `username`
- `email`
- `preferences` (an object with `theme` and `notifications`)

Save it to LocalStorage.
Retrieve and update the `theme` property to `"dark mode"`, then log the updated object.
*/

// Your code here
const userProfile = {
  username: "TJ",
  email: "zzunge@hotmail.com",
  preferences: {
    theme: "light mode",
    notifications: true,
  },
};

localStorage.setItem("userProfile", JSON.stringify(userProfile));

const retrievedProfile = JSON.parse(localStorage.getItem("userProfile"));
retrievedProfile.preferences.theme = "dark mode";

console.log(retrievedProfile);

/* Task 7
Define an object `shoppingList` with an array `items` (strings).
Save it to LocalStorage.
Write a function `addItemToList(item)` that:
- Retrieves `shoppingList` from LocalStorage.
- Adds a new item.
- Saves the updated list back to LocalStorage.
- Logs the updated list.
*/

// Your code here
const shoppingList = {
  items: ["banana", "water", "onion"],
};

localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

function addItemToList(item) {
  const retrievedList = localStorage.getItem("shoppingList");
  const parsedList = JSON.parse(retrievedList);

  parsedList.items.push(item);
  localStorage.setItem("shoppingList", JSON.stringify(parsedList));
  console.log(parsedList);
}

addItemToList("orange");

/* Task 8
Create a counter object with:
- `count` (starting at 0)
Store it in LocalStorage.
Write a function `incrementCounter()` that:
- Retrieves the counter.
- Increases `count` by 1.
- Saves the updated counter.
- Logs the new count.
*/

// Your code here
const counter = { count: 0 };

localStorage.setItem("counter", JSON.stringify(counter));

function incrementCounter() {
  const retrievedCounter = localStorage.getItem("counter");
  const parsedCounter = JSON.parse(retrievedCounter);

  parsedCounter.count += 1;

  localStorage.setItem("counter", JSON.stringify(parsedCounter));

  console.log(parsedCounter.count);
}

incrementCounter();
incrementCounter();

/* Task 9
Create an array `tasks`, where each task is an object (`id`, `description`, `completed`).
Save it to LocalStorage.
Write a function `markTaskComplete(taskId)` that:
- Retrieves `tasks` from LocalStorage.
- Finds the task with the given ID and sets `completed` to `true`.
- Saves the updated tasks.
- Logs the updated list.
*/

// Your code here
const tasks = [
  { id: 1, description: "Designing a logo", completed: false },
  { id: 2, description: "Making a style guide", completed: false },
  { id: 3, description: "Making a color palette", completed: false },
];

localStorage.setItem("tasks", JSON.stringify(tasks));

function markTaskComplete(taskID) {
  const retrievedTasks = JSON.parse(localStorage.getItem("tasks"));

  const task = retrievedTasks.find((task) => task.id === taskID);
  task.completed = true;

  localStorage.setItem("tasks", JSON.stringify(retrievedTasks));
  console.log(retrievedTasks);
}

markTaskComplete(1);
markTaskComplete(2);

/* Task 10
Write a function `clearLocalStorage()` that removes all data stored in LocalStorage.
Call it and confirm LocalStorage is empty.
*/

// Your code here
function clearLocalStorage() {
  localStorage.clear();
}

clearLocalStorage();
console.log(localStorage);
