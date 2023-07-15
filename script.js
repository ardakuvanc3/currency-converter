function convertCurrency() {
  var fromCurrency = document.getElementById("fromCurrency").value;
  var toCurrency = document.getElementById("toCurrency").value;
  
  fetch("https://api.exchangerate-api.com/v4/latest/" + fromCurrency)
    .then(response => response.json())
    .then(data => {
      var exchangeRate = data.rates[toCurrency];
      var result = 1.0 * exchangeRate;
      
      document.getElementById("result").innerHTML = "1 " + fromCurrency + " = " + result + " " + toCurrency;
    })
    .catch(error => {
      console.log("API Hatası:", error);
    });
}
