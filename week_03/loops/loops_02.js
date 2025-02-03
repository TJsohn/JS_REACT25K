/* 
Write a function named logEvenNumbers:
- Use a loop to display all even numbers less than 100 in the pattern: 2, 98, 4, 96, ..., 50.
Display all numbers in a single line in the console.; 
*/
/*
const logEvenNumbers = () => {
  for (i = 2; i < 100; i++) {
    if (i % 2 === 0) {
      console.log(i, 100 - i);
    }
    i++;
  }
};*/

const logEvenNumbers = () => {
  let result = "";
  for (let i = 2, j = 98; i < j; i += 2, j -= 2) {
    result += `${i}, ${j}, `;
  }
  result += "50";
  console.log(result);
};

logEvenNumbers();

/* logEvenNumbers();

const logNumbersOnetoFive = () => {
  for (i = 1; i <= 5; i++) {
    console.log(i);
  }
};

logNumbersOnetoFive();

const logNumbersOnetoFive2 = () => {
  let i = 1;
  while (i <= 5) {
    console.log(i);
    i++;
  }
};

logNumbersOnetoFive2(); */
