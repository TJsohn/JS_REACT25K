/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`.
Add at least two book objects to this collection.
*/

// Your code here
const library = [
  { title: "The Vegetarian", author: "Han Kang", yearPublished: 2007 },
  { title: "Norwegian Wood", author: "Haruki Murakami", yearPublished: 1987 },
];

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here
console.log(library[0].title);
library[1].yearPublished = 1988;
console.log(library[1].yearPublished);

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here
library[0].genres = "novel";
library[0]["isAvailable"] = true;
console.log(library[0].genres);
console.log(library[0].isAvailable);

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here
function Book(title, author, yearPublished, genres) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.genres = genres;
}

const book1 = new Book("Exhalation", "Ted Chiang", 2019, ["SF", "Tragedy"]);
console.log(book1);
library.push(book1);
console.log(library);
/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here
function createBook(title, author, yearPublished, genres) {
  const book = new Book(title, author, yearPublished, genres);
  return book;
}

const createdBook = createBook("Bible", "God", 1922, ["holy", "SF"]);
library.push({ ...createdBook });
console.log("Created book in Library: ", library);
/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

// Your code here
const jsonLibrary = JSON.stringify(library);
console.log("JSON String: ", jsonLibrary);

const jsonObject = JSON.parse(jsonLibrary);
console.log("JSON Object: ", jsonObject);
console.log("First book title: ", library[0].title);

/* Task 7
Create an array named `students`, where each student has a `name`, `age`, and `grade`.
Log the name of any student who has a grade higher than 90.
*/
// Your code here
const students = [
  { name: "TJ", age: 29, grade: 90 },
  { name: "Mei", age: 35, grade: 98 },
  { name: "Page", age: 33, grade: 28 },
];

students.forEach((student) => {
  if (student.grade > 90) {
    console.log(student.name);
  }
});

/* Task 8
Define an object named `car` with properties for `brand`, `model`, `year`, and `isElectric`.
Use a function to check if the car is electric. If it is, log `"This car is eco-friendly!"`. Otherwise, log `"This car runs on fuel."`
*/

// Your code here
const car = {
  brand: "Kia",
  model: "morning",
  year: 2020,
  isElectric: true,
};

function checkIfElectric(car) {
  if (car.isElectric) {
    console.log("This car is eco-friendly!");
  } else {
    console.log("This car runs on fuel.");
  }
}

checkIfElectric(car);

/* Task 9
Create a `movies` array where each movie is an object with properties for `title`, `director`, and `rating`.
Write a loop that logs all movie titles with a rating higher than 8.
*/

// Your code here
const movies = [
  { title: "Godfather", director: "John", rating: 10 },
  { title: "Ben Hur", director: "Mike", rating: 9 },
  { title: "Psycho", director: "Jake", rating: 8 },
];

movies.forEach((movie) => {
  if (movie.rating > 8) {
    console.log(movie.title);
  }
});

/* Task 10
Write a function `findOldestCar` that takes an array of car objects and returns the car with the earliest `year`.
*/

// Your code here
function findOldestCar(cars) {
  let oldestCar = cars[0];
  for (let car of cars) {
    if (car.year < oldestCar.year) {
      oldestCar = car;
    }
  }
  return oldestCar;
}

const cars = [
  { brand: "Hyundai", model: "Sonata", year: 1990 },
  { brand: "Citroen", model: "Quick", year: 1999 },
  { brand: "Ford", model: "Grand", year: 1980 },
];

console.log(findOldestCar(cars));

/* Task 11
Define a `userProfiles` array containing objects representing users.
Each user should have a `username`, `email`, and `isAdmin` property.
Write a function that filters and returns only the users who are administrators.
*/

// Your code here
const userProfiles = [
  { username: "TJ", email: "zzunge@gmail.com", isAdmin: true },
  { username: "Hoa", email: "hoa@hotmail.com", isAdmin: false },
  { username: "Jake", email: "jake@gmail.com", isAdmin: true },
];

function getAdminUsers(users) {
  return users.filter((user) => user.isAdmin);
}

console.log(getAdminUsers(userProfiles));
/* Task 12
Define an array named `orders`, where each order contains `orderId`, `customerName`, `totalAmount`, and `status` (either "pending" or "completed").
Write a function that returns only the completed orders.
*/

// Your code here
const orders = [
  {
    orderId: "order1",
    customerName: "Blake",
    totalAmount: 3,
    status: "pending",
  },
  {
    orderId: "order2",
    customerName: "Jon",
    totalAmount: 4,
    status: "completed",
  },
  {
    orderId: "order3",
    customerName: "Jane",
    totalAmount: 1,
    status: "completed",
  },
];

function completedOrders(orderlists) {
  return orderlists.filter((orderlist) => orderlist.status === "completed");
}

console.log(completedOrders(orders));
/* Task 13
Create an object named `smartphone` with properties for `brand`, `model`, `batteryLife`, and `is5GEnabled`.
Write a function that logs `"This phone supports 5G!"` if `is5GEnabled` is `true`, otherwise logs `"This phone does not support 5G."`
*/

// Your code here
const smartphone = {
  brand: "Samsung",
  model: "Galaxy",
  batterLife: 5,
  is5GEnabled: true,
};

function checkIf5GEnabled(smartphone) {
  if (smartphone.is5GEnabled) {
    console.log("This phone supports 5G!");
  } else {
    console.log("This phone does not support 5G.");
  }
}

checkIf5GEnabled(smartphone);

/* Task 14
Define an object named `fox` with properties `name`, `age`, and `habitat`.
Write a function that logs `"This fox is young"` if its age is under 3, `"This fox is an adult"` if 3 or older.
*/

// Your code here
const fox = { name: "Meg", age: 3, habitat: "mountain" };

function checkIfAdult(fox) {
  if (fox.age >= 3) {
    console.log("This fox is an adult");
  } else {
    console.log("This fox is young");
  }
}

checkIfAdult(fox);

/* Task 15
Define an array named `employees`, where each employee has `name`, `position`, and `salary`.
Write a function that calculates the total salary of all employees in the company.
*/

// Your code here

const employees = [
  { name: "John", position: "Manager", salary: 1500 },
  { name: "Sally", position: "Staff", salary: 1000 },
  { name: "Mike", position: "Intern", salary: 500 },
];

function totalSalary(employees) {
  return employees.reduce((total, employee) => total + employee.salary, 0);
}

console.log(totalSalary(employees));
