
function calculateQuote() {
let miles = document.getElementById('miles').value;
let total = miles * 80+2.5;
document.getElementById('result').innerHTML =
'Estimated Price: £' + total.toFixed(2);
}
