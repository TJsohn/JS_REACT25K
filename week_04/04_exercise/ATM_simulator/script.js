//console.log("page loaded");

document.getElementById("login").onclick = () => {
  document.getElementById("pin").areaSelected();
};

const account = document.getElementById("account");
const toggleBtn = document.getElementById("login");
const pinInput = document.getElementById("pin");

const correntPin = "1234";

toggleBtn.addEventListener("click", () => {
  if (pin.value === correntPin) {
    account.style.display =
      account.style.display === "none" || account.style.display === ""
        ? "block"
        : "none";
  } else {
    alert("Incorrect PIN");
  }
});

const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const balance = document.getElementById("balance");
const message = document.getElementById("message");
const inputDeposit = document.getElementById("deposit");
const inputWithdraw = document.getElementById("withdraw");

let currentBalance = 0;

depositBtn.addEventListener("click", () => {
  const depositAmount = Number(inputDeposit.value);
  deposit(depositAmount);
  balance.innerText = currentBalance;
  //console.log("inputDeposit: ", inputDeposit.value);
});

withdrawBtn.addEventListener("click", () => {
  const withdrawAmount = Number(inputWithdraw.value);
  withdraw(withdrawAmount);
  balance.innerText = currentBalance;
});

function checkBalance() {
  return Number(balance.innerText);
}

function deposit(depositAmount) {
  if (typeof depositAmount !== "number") {
    message.innerText = "Please enter a number";
  } else if (depositAmount < 0) {
    message.innerText = "Please enter a positive number";
  } else {
    currentBalance += depositAmount;
  }
}

function withdraw(withdrawAmount) {
  if (typeof withdrawAmount !== "number") {
    message.innerText = "Please enter a number";
  } else if (withdrawAmount < 0) {
    message.innerText = "Please enter a positive number";
  } else if (withdrawAmount > currentBalance) {
    message.innerText = "Insufficient funds";
  } else {
    currentBalance -= withdrawAmount;
  }
}
