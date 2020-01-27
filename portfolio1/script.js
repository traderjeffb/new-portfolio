// var stock;
// var notCleanInput;
// var input = "FB";
// var api =
//   "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=";
// var apiKey = "&apikey=VBVT9P94JCTSHO29"; //'VBVT9P94JCTSHO29'
// var url = api + input + apiKey;

// function selectText() {
//   const notCleanInput = document.getElementById("stock").value;
//   const input = notCleanInput.replace(/\s+/g, "");
//   console.log("this is input" + input);
// }

// async function getQuote() {
//   let response = await fetch(url);
//   console.log("here is " + url);
//   let data = await response.json();
//   console.log(data);
// }

//=================================================================
var stock;
var notCleanInput;
var input;
var api =
  "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=";
var apiKey = "&apikey=VBVT9P94JCTSHO29"; //'VBVT9P94JCTSHO29'
var url = api + input + apiKey;

function selectText() {
  const notCleanInput = document.getElementById("stock").value;
  input = notCleanInput.replace(/\s+/g, "");
  //console.log("this is input " + input);
  url = api + input + apiKey;
  //console.log("line 36 " + url);
}

async function getQuote() {
  let response = await fetch(url);
  //console.log("here is " + url);
  let data = await response.json();
  console.log(data);
}
