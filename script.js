var cardNumberInput = document.getElementById("card-number");
var expirationDateInput = document.getElementById("expiration-date");
var cardholderNameInput = document.getElementById("cardholder-name");
var cvvInput = document.getElementById("cvv");

var cardNumberDisplay = document.getElementById("card-number-display");
var expirationDateDisplay = document.getElementById("expiration-date-display");
var cardholderNameDisplay = document.getElementById("cardholder-name-display");
var cvvDisplay = document.getElementById("cvv-display");

var cardContainer = document.querySelector(".card-container");

cardNumberInput.addEventListener("input", updateCard);
expirationDateInput.addEventListener("input", updateCard);
cardholderNameInput.addEventListener("input", updateCard);
cvvInput.addEventListener("input", updateCard);
cvvInput.addEventListener("focus", showBack);
cvvInput.addEventListener("blur", showFront);

function updateCard() {
  var cardNumber = cardNumberInput.value;
  var expirationDate = expirationDateInput.value;
  var cardholderName = cardholderNameInput.value;
  var cvv = cvvInput.value;

  // Format the card number with spaces between every 4th digit
  var formattedCardNumber = cardNumber.replace(/\s/g, "").replace(/(.{4})/g, "$1 ");
  cardNumberDisplay.innerText = formattedCardNumber.trim();

  // Format the expiration date in MM/YY format
  var formattedExpirationDate = expirationDate.replace(/\D/g, ""); // Remove non-digit characters
  if (formattedExpirationDate.length > 2) {
    formattedExpirationDate = formattedExpirationDate.replace(/(\d{2})(\d{2})/, "$1/$2");
  }
  expirationDateDisplay.innerText = formattedExpirationDate;

  cardholderNameDisplay.innerText = cardholderName;
  cvvDisplay.innerText = cvv;
}

function showBack() {
  cardContainer.classList.add("show-back");
}

function showFront() {
  cardContainer.classList.remove("show-back");
}
