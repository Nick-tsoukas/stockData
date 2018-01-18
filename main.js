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
      setData(stockData);
      val.value = '';
      var keyOfData = Object.keys(stockData["Time Series (Daily)"]);
      var arrayOfData = [];
      keyOfData.forEach(function(current,index,array) {
        arrayOfData.push(stockData["Time Series (Daily)"][current]['4. close']);
      });
      console.log(arrayOfData);
       return arrayOfData;
    })
    .then(function(ar) {
      d3.select(".chart")
      .selectAll("div")
        .data(ar)
      .enter().append("div")
        .style("width", function(d) { return d * 10 + "px"; })
        .text(function(d) { return d; });
    })
}

function setData(data) {
  var ob = data["Time Series (Daily)"];
  var ar = []
  for (var prop in ob) {
    if (ob.hasOwnProperty(prop)) {
      ar.push(ob[prop]["1. open"]);
    }
  }
  listSymbol.innerHTML = data["Meta Data"]["2. Symbol"];
}
