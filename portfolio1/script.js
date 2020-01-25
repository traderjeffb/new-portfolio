var stock;
var notCleanInput;
var input;
var api =
  "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=";
var apiKey = "&apikey=VBVT9P94JCTSHO29"; //'VBVT9P94JCTSHO29'
var url = api + input + apiKey;
var data;

function selectText() {
  const notCleanInput = document.getElementById("stock").value;
  input = notCleanInput.replace(/\s+/g, "");
  url = api + input + apiKey;

  console.log("input is " + input);
  console.log("url is " + url);
}

// async function getQuote() {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// }
//console.log(data);
// console.log(url);
function getQuote() {
  fetch(url)
    .then(res => {
      if (res.ok) {
        console.log("SUCCESS");
      } else {
        console.log("NOT SUCCESSFUL");
      }
    })
    .then(data => console.log(data))
    .catch(error => console.log("ERROR"));
}
