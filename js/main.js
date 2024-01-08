const kmPrice = .21
const calculate = document.getElementById('calculate')

let name = document.getElementById('name')
let tripLength = document.getElementById('km')
let ageSpan = document.getElementById('age-span')


calculate.addEventListener('click', ticketPrice)

function ticketPrice() {
    if (ageSpan.value == 'minorenne') {
        document.getElementById("ticket").innerHTML = ((tripLength.value * kmPrice) * 0.8).toFixed(2);
    } else if (ageSpan.value == 'over-65') {
        document.getElementById("ticket").innerHTML = ((tripLength.value * kmPrice) * 0.6).toFixed(2);
    }
    else {
        document.getElementById("ticket").innerHTML = (tripLength.value * kmPrice).toFixed(2);
    }
}