const magic8Ball = () => {
  let question = prompt("Ask me a yes or no question:");
  console.log("Question asked: " + question);

  let randomNumber = Math.floor(Math.random() * 8) + 1;

  let answer;
  switch (randomNumber) {
    case 1:
      answer = "Yes, I can see it!";
      break;
    case 2:
      answer = "It is certain.";
      break;
    case 3:
      answer = "Reply hazy, try again.";
      break;
    case 4:
      answer = "Of course you will!";
      break;
    case 5:
      answer = "Can't see it yet.";
      break;
    case 6:
      answer = "You might not want to know.";
      break;
    case 7:
      answer = "My sources say no.";
      break;
    case 8:
      answer = "Outlook not so good.";
      break;
  }

  console.log(answer);
  alert(answer);
};

magic8Ball();
