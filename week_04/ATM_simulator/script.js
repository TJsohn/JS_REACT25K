const balanceText = document.querySelector("#balance");
const depositInput = document.querySelector(".depositInput");
const withdrawInput = document.querySelector(".withdrawInput");
const depositBtn = document.querySelector(".depositBtn");
const withdrawBtn = document.querySelector(".withdrawBtn");
const message = document.querySelector(".message");

let balance = 0;

const deposit = () => {
  const amount = parseFloat(depositInput.value);

  if (isNaN(amount) || amount <= 0) {
    showMessage("Enter a valid deposit amount.", true);
    return;
  }

  balance += amount;
  updateBalance();
  showMessage(`Deposited ${amount.toFixed(2)} € successfully!`);
  depositInput.value = "";
};

const showMessage = (text, isError = false) => {
  message.textContent = text;
  message.style.color = isError ? "red" : "green";
};

const withdraw = () => {
  const amount = parseFloat(withdrawInput.value);
  if (isNaN(amount) || amount <= 0) {
    showMessage("Enter a valid withdrawl amount.", true);
    return;
  }
  if (amount > balance) {
    showMessage("Not enough balance.", true);
    return;
  }

  balance -= amount;
  updateBalance();
  showMessage(`Withdrew ${amount.toFixed(2)} € successfully!`);
  withdrawInput.value = "";
};

const updateBalance = () => {
  balanceText.textContent = balance.toFixed(2);
};

depositBtn.addEventListener("click", deposit);
withdrawBtn.addEventListener("click", withdraw);

/* document.getElementById("login").onclick = () => {
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
});*/
