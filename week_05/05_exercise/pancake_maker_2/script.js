const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");

const changeHandler = (event) => {
  console.log("Event: ", event);
  const basePrice = parseFloat(
    document.getElementById("type").selectedOptions[0].dataset.price
  );
  console.log("Base price: ", basePrice);

  const toppingsTotal = [
    ...document.querySelectorAll(".topping:checked"),
  ].reduce((sum, topping) => sum + parseFloat(topping.dataset.price), 0);

  console.log("Toppings total: ", toppingsTotal);

  const extrasTotal = [...document.querySelectorAll(".extra:checked")].reduce(
    (sum, extra) => sum + parseFloat(extra.dataset.price),
    0
  );

  console.log("Extras total: ", extrasTotal);

  const deliveryFee = parseFloat(
    document.querySelector(".delivery:checked").dataset.price
  );

  console.log("Delivery fee: ", deliveryFee);

  const newTotal = basePrice + toppingsTotal + extrasTotal + deliveryFee;

  totalPriceBanner.classList.add("blink");
  totalPriceDisplay.classList.add("blink");

  setTimeout(() => {
    totalPriceDisplay.textContent = `${newTotal}€`;
    totalPriceBanner.textContent = `${newTotal}€`;

    totalPriceBanner.classList.remove("blink");
    totalPriceDisplay.classList.remove("blink");
  }, 600);
};

/* totalPriceDisplay.textContent = `${
    basePrice + toppingsTotal + extrasTotal + deliveryFee
  }€`;
  totalPriceBanner.textContent = `${
    basePrice + toppingsTotal + extrasTotal + deliveryFee
  }€`;
};*/

pancakeForm.addEventListener("change", changeHandler);

seeOrderBtn.addEventListener("click", () => {});
