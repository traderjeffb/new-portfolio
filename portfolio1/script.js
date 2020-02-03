var ticker;
var notCleanInput;
var input;
var api =
  "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=";
var apiKey = "&apikey=VBVT9P94JCTSHO29&datatype=csv"; //'VBVT9P94JCTSHO29'
var url = api + input + apiKey;

function selectText() {
  const notCleanInput = document.getElementById("ticker").value;
  input = notCleanInput.replace(/\s+/g, "");
  url = api + input + apiKey;
}

async function getQuote() {
  let response = await fetch(url);
  let data = await response.text();
  console.log(data);
  //trying to manipulate the meta data
  //console.log(data.symbol);
}
// --------------------------------------------
