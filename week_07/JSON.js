/* Task 1
Create a JavaScript object named `student` with properties:
- `name`
- `age`
- `grade`
Convert the object into a JSON string and log it to the console.
*/

// Your code here
const student = {
  name: "Jon",
  age: 30,
  grade: 4,
};

const jsonString = JSON.stringify(student);
console.log(jsonString);

/* Task 2
Take the JSON string from Task 1 and convert it back into a JavaScript object.
Log the `name` property of the converted object.
*/

// Your code here

const studentObject = JSON.parse(jsonString);
console.log(studentObject);

/* Task 3
Create an array named `classroom`, where each element is an object representing a student.
Each student object should have properties for `name`, `age`, and `grade`.
Convert the array into a JSON string and log it to the console.
*/

// Your code here
const classroom = [
  { name: "Jay", age: 33, grade: 4 },
  { name: "Juha", age: 28, grade: 5 },
  { name: "Femi", age: 26, grade: 4.5 },
];

const jsonString3 = JSON.stringify(classroom);
console.log(jsonString3);

/* Task 4
Take the JSON string from Task 3, convert it back into a JavaScript array,
and log the names of all students in the classroom.
*/

// Your code here
const jsArray = JSON.parse(jsonString3);
jsArray.forEach((classroom) => console.log(classroom.name));

/* Task 5
Create an object named `weatherReport` with the following properties:
- `temperature`
- `humidity`
- `conditions` (e.g., "Sunny", "Rainy")

Convert the object into a JSON string and store it in a variable named `weatherJSON`.
Then, parse the JSON string back into an object and log the `conditions` property.
*/

// Your code here
const weatherReport = {
  temperature: 23,
  humidity: 34,
  conditions: "Sunny",
};

const weatherJSON = JSON.stringify(weatherReport);
const weatherJS = JSON.parse(weatherJSON);
console.log(weatherJS.conditions);

/* Task 6
Define an array named `movies`, where each movie has:
- `title`
- `director`
- `rating`

Convert this array into a JSON string, then parse it back into a JavaScript object.
Log all movie titles with a rating higher than 8.
*/

// Your code here
const movies = [
  { title: "Godfather", director: "Bong Joonho", rating: 8 },
  { title: "Parasite", director: "Jake", rating: 9 },
  { title: "Substance", director: "Ellen", rating: 9.5 },
];

const moviesJSON = JSON.stringify(movies);
const moviesJS = JSON.parse(moviesJSON);
moviesJS.forEach((movie) => {
  if (movie.rating > 8) {
    console.log(movie.title);
  }
});

/* Task 7
Write a function `filterHighRatedMovies(jsonString)` that:
- Takes a JSON string representing an array of movie objects.
- Converts it into a JavaScript array.
- Returns a new array containing only movies with a rating higher than 8.
*/

// Your code here
function filterHighRatedMovies(jsonString) {
  const moviesJS = JSON.parse(jsonString);
  const filteredMoviesArr = moviesJS.filter((movie) => movie.rating > 8);
  console.log(filteredMoviesArr);
}

filterHighRatedMovies(moviesJSON);

/* Task 8
Define an object named `shoppingCart` with:
- `items` (an array of product objects, each with `name` and `price`)
Convert `shoppingCart` into a JSON string and log it to the console.
*/

// Your code here
const shoppingCart = {
  items: [
    { name: "Computer", price: 100 },
    { name: "Laptop", price: 140 },
    { name: "Flower", price: 5 },
  ],
};

const jsonString8 = JSON.stringify(shoppingCart);
console.log(jsonString8);

/* Task 9
Write a function `totalCartValue(jsonString)` that:
- Takes a JSON string representing a shopping cart.
- Converts it into a JavaScript object.
- Returns the total price of all items in the cart.
*/

// Your code here

function totalCartValue(jsonString) {
  const newShoppingCart = JSON.parse(jsonString);
  return newShoppingCart.items.reduce((total, item) => total + item.price, 0);
}

console.log(totalCartValue(jsonString8));

/* Task 10
Create an object named `gameProgress` with:
- `level`
- `score`
- `livesRemaining`

Convert the object into a JSON string and log it.
Parse the JSON back into an object and update the `score` property by adding 100 points.
Log the updated object.
*/

// Your code here
const gameProgress = {
  level: 3,
  score: 200,
  livesRemaining: 1,
};

const gameProgressJson = JSON.stringify(gameProgress);
const parsedGameProgress = JSON.parse(gameProgressJson);

parsedGameProgress.score += 100;

console.log(parsedGameProgress);
