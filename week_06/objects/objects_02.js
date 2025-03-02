/* Task 1
Create an object `weather` that contains properties `temperature`, `humidity`, and `condition` (e.g., "Sunny", "Rainy").
Write a function that logs `"Take an umbrella!"` if it's rainy.
*/

// Your code here
const weather = { temperature: 20, humidity: 45, condition: "Rainy" };

function checkIfRainy(weather) {
  if (weather.condition === "Rainy") {
    console.log("Take an umbrella!");
  }
}

checkIfRainy(weather);

/* Task 2
Define an object named `shoppingCart` that contains an array of items.
Each item has `name`, `price`, and `quantity`.
Write a function that calculates the total price of all items in the cart.
*/

// Your code here
const shoppingCart = [
  { name: "onion", price: 1, quantity: 3 },
  { name: "jeans", price: 10, quantity: 1 },
  { name: "TV", price: 300, quantity: 1 },
];

function totalPrice(shoppingCart) {
  return shoppingCart.reduce(
    (total, shoppingCart) => total + shoppingCart.price * shoppingCart.quantity,
    0
  );
}

console.log(totalPrice(shoppingCart));
/* Task 3
Create an array of objects named `restaurants`, each with properties `name`, `cuisineType`, and `rating`.
Write a function that returns only the restaurants with a rating of 4 or higher.
*/

// Your code here
const restaurants = [
  { name: "Iizip", cuisineType: "Korean", rating: 4 },
  { name: "Manna", cuisineType: "Korean", rating: 4.5 },
  { name: "Kuu", cuisineType: "Finnish", rating: 3.8 },
];

function selectedRestaurants(restaurants) {
  return restaurants.filter((restaurant) => restaurant.rating >= 4);
}

console.log(selectedRestaurants(restaurants));

/* Task 4
Define an object named `bankAccount` with properties `accountHolder`, `balance`, and `transactions` (an array of numbers).
Write a function that calculates the total balance after all transactions.
*/

// Your code here
const bankAccount = {
  accountHolder: "TJ",
  balance: 100,
  transactions: [10, 20, -40],
};

function totalBalance(bankAccount) {
  const transactionSum = bankAccount.transactions.reduce(
    (sum, transaction) => sum + transaction,
    0
  );
  return bankAccount.balance + transactionSum;
}

console.log(totalBalance(bankAccount));

/* Task 5
Create an array `students` where each student has `name`, `scores` (array of numbers), and `averageScore` (initially null).
Write a function that calculates and updates each student's `averageScore`.
*/

// Your code here
const students = [
  { name: "TJ", scores: [5, 4, 3], averageScore: null },
  { name: "Alice", scores: [4, 3, 2], averageScore: null },
];

function calculateAverageScores(students) {
  students.forEach((student) => {
    const total = student.scores.reduce((sum, score) => sum + score, 0);
    student.averageScore = total / student.scores.length;
  });
}

calculateAverageScores(students);

console.log(students);

/* Task 6
Define an array named `courses`, each containing `courseName`, `instructor`, and `studentsEnrolled`.
Write a function that logs the course name of any course with more than 30 students.
*/

// Your code here
const courses = [
  { courseName: "JS", instructor: "Margit", studentsEnrolled: 32 },
  { courseName: "UI", instructor: "Elina", studentsEnrolled: 28 },
  { courseName: "HTML", instructor: "Martin", studentsEnrolled: 31 },
];

function fullCourses(courses) {
  courses.forEach((course) => {
    if (course.studentsEnrolled > 30) {
      console.log(course.courseName);
    }
  });
}

fullCourses(courses);
/* Task 7
Create an object `pet` with properties `species`, `name`, and `isVaccinated`.
Write a function that returns `"Vaccination required"` if the pet is not vaccinated.
*/

// Your code here
const pet = { species: "Pug", name: "Pupu", isVaccinated: false };

function ifVaccinated(pet) {
  return pet.isVaccinated ? "Pet is vaccinated" : "Vaccination required";
}

console.log(ifVaccinated(pet));

/* Task 8
Define an object named `city` with properties `name`, `population`, and `landmark`.
Write a function that logs `"This is a big city!"` if the population exceeds 1,000,000.
*/

// Your code here
const city = { name: "Busan", population: 1500000, landmark: "Haeundae" };

function bigCity(city) {
  if (city.population > 1000000) {
    console.log("This is a big city!");
  }
}

bigCity(city);
/* Task 9
Create an array `transactions`, where each transaction is an object with `type` ("credit" or "debit") and `amount`.
Write a function that calculates the total balance after processing all transactions.
*/

// Your code here
const transactions = [
  { type: "credit", amount: 100 },
  { type: "debit", amount: 200 },
  { type: "credit", amount: 300 },
];

function calculateBalance(transactions) {
  let balance = 0;

  for (let transaction of transactions) {
    if (transaction.type === "credit") {
      balance += transaction.amount;
    } else {
      balance -= transaction.amount;
    }
  }
  return balance;
}

console.log(`Total Balance: ${calculateBalance(transactions)}`);

/* Task 10
Define an object named `foxPack` containing an array of fox objects.
Each fox has `name`, `age`, and `furColor`.
Write a function that filters out only the foxes that are younger than 2.
*/

// Your code here
const foxPack = [
  { name: "Juri", age: 7, furColor: "brown" },
  { name: "Ellie", age: 1, furColor: "red" },
  { name: "Jamie", age: 1, furColor: "black" },
];

function youngFoxes(foxPack) {
  return foxPack.filter((fox) => fox.age < 2);
}

console.log(youngFoxes(foxPack));

/* Task 11
Create an object `gameCharacter` with properties `name`, `level`, `health`, and `inventory` (an array).
Write a function that logs all items in the character’s inventory.
*/

// Your code here
const gameCharacter = {
  name: "Clara",
  level: 2,
  health: 80,
  inventory: ["Gun", "Bullets", "Bow"],
};

function allInventory(gameCharacter) {
  gameCharacter.inventory.forEach((item) => console.log(`${item}`));
}

allInventory(gameCharacter);

/* Task 12
Define an array named `employees`, where each employee has a `name`, `role`, and `workingHours`.
Write a function that finds and logs employees who work more than 40 hours.
*/

// Your code here
const employees = [
  { name: "Jay", role: "Accountant", workingHours: 42 },
  { name: "Mike", role: "HR", workingHours: 38 },
  { name: "Maya", role: "CEO", workingHours: 45 },
];

function hardWorkers(employees) {
  return employees.filter((employee) => employee.workingHours > 40);
}

console.log(hardWorkers(employees));

/* Task 13
Create an array `musicAlbums` where each album has `title`, `artist`, and `releaseYear`.
Write a function that logs albums released after 2000.
*/

// Your code here
const musicAlbums = [
  { title: "Yesterday", artist: "The Beatles", releaseYear: 1980 },
  { title: "Sorry", artist: "Taeji", releaseYear: 2020 },
  { title: "Bad Boy", artist: "Big Bang", releaseYear: 2004 },
];

function newerAlbums(musicAlbums) {
  return musicAlbums.filter((musicAlbum) => musicAlbum.releaseYear > 2000);
}

console.log(newerAlbums(musicAlbums));

/* Task 14
Define an array named `cars`, each containing `brand`, `model`, and `horsepower`.
Write a function that finds and returns the car with the highest horsepower.
*/

// Your code here
const cars = [
  { brand: "Kia", model: "Morning", horsepower: 75 },
  { brand: "Ford", model: "Zebra", horsepower: 200 },
  { brand: "Citroen", model: "Markus", horsepower: 170 },
];

function findFastestCar(cars) {
  let fastest = cars[0];

  for (let car of cars) {
    if (car.horsepower > fastest.horsepower) {
      fastest = car;
    }
  }
  return fastest;
}

const fastestCar = findFastestCar(cars);
console.log(findFastestCar(cars));

/* Task 15
Create an array of `airports`, where each airport has `name`, `country`, and `flightsPerDay`.
Write a function that finds the airport with the most daily flights.
*/

// Your code here
const airports = [
  { name: "Vancouver", country: "Canada", flightsPerDay: 200 },
  { name: "Helsinki", country: "Finland", flightsPerDay: 105 },
  { name: "New York", country: "USA", flightsPerDay: 300 },
];

function findBusiestAirport(airports) {
  let busiest = airports[0];

  for (let airport of airports) {
    if (airport.flightsPerDay > busiest.flightsPerDay) {
      busiest = airport;
    }
  }
  return busiest;
}

const busiestAirport = findBusiestAirport(airports);
console.log(
  `The airport with the most daily flights is ${busiestAirport.name}.`
);
