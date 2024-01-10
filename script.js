
const convertButton = document.querySelector('.convert-button')

function  convertValues(){
  const inputCurrencyValue = document.querySelector(".input-currency").value
  
const dolarToday = 5.2

const convertedValues = inputCurrencyValue / dolarToday

console.log(convertedValues)
}

convertButton.addEventListener("click", convertValues)