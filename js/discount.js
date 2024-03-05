function getInputValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}

function getTextElementValueById(elementId) {
  const textElementTotal = document.getElementById(elementId);
  const textElementTotalValueString = textElementTotal.innerText;
  const textElementTotalValue = parseFloat(textElementTotalValueString);
  return textElementTotalValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElementTotal = document.getElementById(elementId);
  textElementTotal.innerText = newValue;
}

function calculateDiscount(originalPrice, discountPercentage) {
  return originalPrice - originalPrice * (discountPercentage / 100);
}

document.getElementById("add-btn").addEventListener("click", function () {
  const addPrice = getInputValueById("price-field");
  const previousPriceTotal = getTextElementValueById("price-total");

  const currentPrice = previousPriceTotal + addPrice;
  setTextElementValueById("price-total", currentPrice);
});

document.getElementById("btn-discount").addEventListener("click", function () {
  const currentPrice = getTextElementValueById("price-total");
  const discountPrice = calculateDiscount(currentPrice, 30);
  setTextElementValueById("pay-total", discountPrice);
});
