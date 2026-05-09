
function calculateQuote() {
let miles = document.getElementById('miles').value;
let total = miles * 2.5;
document.getElementById('result').innerHTML =
'Estimated Price: £' 80 + total.toFixed(2);
}
