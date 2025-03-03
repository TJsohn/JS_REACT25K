const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");
const seeOrderButton = document.getElementById("seeOrder");
const summaryText = document.querySelector("#summaryText");
const customerName = document.querySelector("#customerName");

const changeHandler = () => {
  const basePrice = parseFloat(
    document.getElementById("type").selectedOptions[0].dataset.price
  );

  const toppingsTotal = [
    ...document.querySelectorAll(".topping:checked"),
  ].reduce((sum, topping) => sum + parseFloat(topping.dataset.price), 0);

  const extrasTotal = [...document.querySelectorAll(".extra:checked")].reduce(
    (sum, extra) => sum + parseFloat(extra.dataset.price),
    0
  );

  const deliveryChecked = document.querySelector(".delivery:checked");
  if (deliveryChecked) {
    deliveryFee = parseFloat(deliveryChecked.dataset.price);
  }

  const totalPrice = basePrice + toppingsTotal + extrasTotal + deliveryFee;

  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;

  /*totalPriceBanner.classList.add("blink");
  totalPriceDisplay.classList.add("blink");*/

  /*setTimeout(() => {

    totalPriceBanner.classList.remove("blink");
    totalPriceDisplay.classList.remove("blink");
  }, 600);*/
};

/* totalPriceDisplay.textContent = `${
    basePrice + toppingsTotal + extrasTotal + deliveryFee
  }€`;
  totalPriceBanner.textContent = `${
    basePrice + toppingsTotal + extrasTotal + deliveryFee
  }€`;
};*/

pancakeForm.addEventListener("change", changeHandler);

const getToppings = () => {
  const selectedToppings = document.querySelectorAll(".topping:checked");

  const toppingList = [];

  selectedToppings.forEach((element) => {
    toppingList.push(element.parentElement.innerText.trim());
  });
  return toppingList.join(", ");
};

const getExtras = () => {
  const selectedExtras = document.querySelectorAll(".extra:checked");

  const extraList = [];

  selectedExtras.forEach((element) => {
    extraList.push(element.parentElement.innerText.trim());
  });
  return extraList.join(", ");
};

const seeOrderClickHandler = () => {
  const toppings = getToppings();
  const extras = getExtras();

  const [formattedPancakeType] = pancakeType.value.split(" - ");
  const [formattedSelectedExtras] = extras.split(" - ");

  summaryText.textContent = `Order created by ${customerName.value}: ${formattedPancakeType} pancake with ${toppings}, ${formattedSelectedExtras}. Delivery fee: ${deliveryFee}€`;
};

seeOrderButton.addEventListener("click", seeOrderClickHandler);
