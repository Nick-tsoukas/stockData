var btn = document.getElementById("mySubmit");
var val = document.getElementById('stock');
var formStock = document.getElementById('stockForm');
var listSymbol = document.getElementById('symbol');
var stockData = {};

formStock.addEventListener('submit', function(e) {
  e.preventDefault();
  var myStock = val.value.toUpperCase();
  getData(myStock);
});


function getData(stock) {
  var url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + stock + "&apikey=CXQN168JJQ4LTUVQ";
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      stockData = data;
      //console.log(stockData);
      setData(stockData);
      val.value = '';
    });
}


function setData(data) {
  var ob = data["Time Series (Daily)"];
  for (var prop in ob) {
    if (ob.hasOwnProperty(prop)) {
      console.log(ob[prop]["1. open"]);
    }

  }
  listSymbol.innerHTML = data["Meta Data"]["2. Symbol"];
}
