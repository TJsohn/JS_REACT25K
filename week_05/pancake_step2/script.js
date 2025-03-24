const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");
const seeOrderButton = document.getElementById("seeOrder");
const summaryText = document.querySelector("#summaryText");
const customerName = document.querySelector("#customerName");

let deliveryFee = 0;

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
  deliveryFee = deliveryChecked ? parseFloat(deliveryChecked.dataset.price) : 0;

  const totalPrice = basePrice + toppingsTotal + extrasTotal + deliveryFee;

  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;
};

/*totalPriceBanner.classList.add("blink");
  totalPriceDisplay.classList.add("blink");*/

/*setTimeout(() => {

    totalPriceBanner.classList.remove("blink");
    totalPriceDisplay.classList.remove("blink");
  }, 600);*/

pancakeForm.addEventListener("change", changeHandler);

const getToppings = () => {
  const selectedToppings = document.querySelectorAll(".topping:checked");

  if (selectedToppings.length === 0) return "no toppings";

  return [...selectedToppings]
    .map((topping) => topping.parentElement.innerText.trim())
    .join(", ");
};

const getExtras = () => {
  const selectedExtras = document.querySelectorAll(".extra:checked");

  if (selectedExtras.length === 0) return "no extras";

  return [...selectedExtras]
    .map((extra) => extra.parentElement.innerText.split(" - ")[0].trim())
    .join(", ");
};

const getDelivery = () => {
  const selectedDelivery = document.querySelector(".delivery:checked");

  if (!selectedDelivery) return "no delivery method";

  return selectedDelivery.parentElement.innerText.trim();
};

const seeOrderClickHandler = () => {
  const toppings = getToppings();
  const extras = getExtras();
  const deliveryMethod = getDelivery();

  const formattedPancakeType =
    pancakeType.selectedOptions[0].innerText.split(" - ")[0];

  summaryText.textContent = `Order created by ${customerName.value}: ${formattedPancakeType} pancake with ${toppings}, ${extras}. Delivery: ${deliveryMethod}`;

  window.selectedOrder = {
    formattedPancakeType,
    toppings,
    extras,
    deliveryMethod,
    totalPrice: parseFloat(totalPriceDisplay.textContent),
  };
};

seeOrderButton.addEventListener("click", seeOrderClickHandler);

function validateOrderForm() {
  const customerName = document.getElementById("customerName").value.trim();

  if (customerName === "") {
    alert("Customer's name is required!");
    return false;
  }
  return true;
}
