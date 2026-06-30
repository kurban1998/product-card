const showTemperature = (temp, city) => {
  console.log(`Сейчас в ${city} температура - ${temp} градусов по Цельсию`)
}

showTemperature(24, "Москва");

const LIGHT_SPEED = 299792458;
const compareToSpeedLight = (lightSpeed) => {
  if(lightSpeed > LIGHT_SPEED) console.log("Сверхсветовая скорость");
  else if (lightSpeed < LIGHT_SPEED) console.log("Субсветовая скорость");
  else console.log("Скорость света");
} 

compareToSpeedLight(299792458);
compareToSpeedLight(299792459);
compareToSpeedLight(299792457);

let myProduct = "Молоко";
let productPrice = 150;

const tryBuyProduct = (budget) => {
  if (budget>=productPrice){
    console.log(`${myProduct} приобретен. Спасибо за покупку!`);
  }
  else{
    console.log(`Вам не хватает ${productPrice - budget}$, пополните баланс`);
  }
}

tryBuyProduct(200);
tryBuyProduct(100);


const connectionString = "";
let isConnect = false;
let numberAttempts = 0;

function tryConnectToServer() {}