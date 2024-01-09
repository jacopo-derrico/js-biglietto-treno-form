const kmPrice = .21
const calculate = document.getElementById('calculate')
const cancel = document.getElementById('cancel')

let nameSurname = document.getElementById('name')
let tripLength = document.getElementById('km')
let ageSpan = document.getElementById('age-span')


calculate.addEventListener('click', ticketPrice)

function vagonNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function codeCP(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ticketPrice() {
    if (ageSpan.value == 'minorenne') {
        document.getElementById("ticket-price").innerHTML = ((tripLength.value * kmPrice) * 0.8).toFixed(2) + "€";
        document.getElementById('offer').innerHTML = "Biglietto Ridotto"
    } else if (ageSpan.value == 'over-65') {
        document.getElementById("ticket-price").innerHTML = ((tripLength.value * kmPrice) * 0.6).toFixed(2) + "€";
        document.getElementById('offer').innerHTML = "Biglietto Senior"
    }
    else {
        document.getElementById("ticket-price").innerHTML = (tripLength.value * kmPrice).toFixed(2) + "€";
        document.getElementById('offer').innerHTML = "Biglietto Standard"
    }

    document.getElementById('vagon').innerHTML = vagonNumber(1, 9)

    document.getElementById('cp-code').innerHTML = codeCP(10000, 99999)

    document.getElementById('passenger-name').innerHTML = nameSurname.value

    document.getElementById('ticket').style.display = 'block'
}

function refreshPage() {
    window.location.reload();
}

cancel.addEventListener('click', refreshPage)

