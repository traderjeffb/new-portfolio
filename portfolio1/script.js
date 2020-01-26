var stock;
var notCleanInput;
var input = "GOOG";
var api =
  "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=";
var apiKey = "&apikey=VBVT9P94JCTSHO29"; //'VBVT9P94JCTSHO29'
var url = api + input + apiKey;

function selectText() {
  const notCleanInput = document.getElementById("stock").value;
  const input = notCleanInput.replace(/\s+/g, "");
  return input;
}

async function getQuote() {
  let response = await fetch(url);
  console.log("here is " + url);
  let data = await response.json();
  console.log(data);
}
// remove this line
