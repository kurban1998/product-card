const product = document.querySelector('.product');
const changeCardColorButton = document.querySelector('.change-card-color-button');

changeCardColorButton.addEventListener('click', () => {
  product.style.backgroundColor = 'green';
});

const products = document.querySelectorAll('.product');
const changeCardsColorButton = document.querySelector('.change-cards-color-button');

changeCardsColorButton.addEventListener('click', () => {
  products.forEach((card) => card.style.backgroundColor = 'red');
});

const googleUrl = "https://www.google.com/";
const openGoogleButton = document.querySelector('.open-google-button');
openGoogleButton.addEventListener('click', openGoogle);

const title = document.querySelector('.title');
title.addEventListener('mouseenter', (event) => {
  console.log(event.target.textContent);
});

const toggleButton = document.querySelector('.toggle-color-button');
toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
});

const displayMessageButton = document.querySelector('.display-message-button');
displayMessageButton.addEventListener('click', () => displayMessage('ДЗ №4'));

function displayMessage(message) {
  alert(message);
  console.log(message);
}

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');
  if (answer === true) window.open(googleUrl);
}
