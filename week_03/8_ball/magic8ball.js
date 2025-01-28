let magic8Ball = prompt("Ask me a yes or no question.");

console.log(magic8Ball);

//UseMath.random() to generate a random number between 1 and8.
//UseMath.floor() to ensure the number is a whole number.
const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(randomNum(1, 8));

const answer = (randomNum) => {
  switch (randomNum) {
    case 1:
      console.log("Yes, definitely!");
      break;
    case 2:
      console.log("It is certain.");
      break;
    case 3:
      console.log("Reply hazy, try again.");
      break;
    case 4:
      console.log("Of course you will!");
      break;
    case 5:
      console.log("Can't see it yet.");
      break;
    case 6:
      console.log("You might not want to know.");
      break;
    case 7:
      console.log("My sources say no.");
      break;
    case 8:
      console.log("Outlook not so good.");
      break;
  }
};

console.log(answer);
alert(answer);
