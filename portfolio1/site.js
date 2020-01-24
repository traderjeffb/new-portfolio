var stock;

var api = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY";
var apiKey = "&apikey=VBVT9P94JCTSHO29"; //'VBVT9P94JCTSHO29'
var input;

var getQuote = select("#submit");

button.onclick = getQuote;
console.log("mouse pressed");
input = select("#stock");
console.log(input);

function getQuote() {
  var url = api + input.value() + apiKey;
  LoadJSON(url, gotData);
  Console.log(data);
}

function gotData(data) {
  quote = data;
  console.log(quote);
}
