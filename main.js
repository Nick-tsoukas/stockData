var btn = document.getElementById("mySubmit");
var val = document.getElementById('stock');
var formStock = document.getElementById('stockForm');
var listSymbol = document.getElementById('symbol');
var stockData = [];

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
      stockData.push(data);
      console.log(stockData);
      setData(stockData);
      val.value = '';
    });
}


function setData(data) {
  console.log('in set Data');
  listSymbol.innerHTML = data[0]["Meta Data"]["2. Symbol"];
}
