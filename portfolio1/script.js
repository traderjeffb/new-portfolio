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
// -----------------------------------
async function getQuote() {
  const xs = [];
  const ys = [];

  const response = await fetch(url);
  const data = await response.text();

  const table = data.split("\n").slice(1);

  table.forEach(row => {
    const columns = row.split(",");
    const timestamp = columns[0];
    table.reverse();
    xs.push(timestamp);
    const last = columns[4];
    ys.push(last);
    console.log(input);
    console.log(timestamp, last);
  });
  return { xs, ys };
}

// ---------all good above--------------
