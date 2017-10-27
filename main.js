var btn = document.getElementById("mySubmit");
var val = document.getElementById('stock');
var formStock = document.getElementById('stockForm');
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
      console.log(data);
      console.log(typeof(data));
      val.value = '';
    });
}
