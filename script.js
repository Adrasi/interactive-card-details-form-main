// function myFunc() {
//     let x = document.form["form"]["cardholder", "cardnumber", "expdate", "cvc"].value;
//     if (x = "") {
//         alert("This field is required");
//         return false;
//     }
// }

const cardNumber = document.querySelector('.number-div');
const cardHolderName = document.querySelector('.name-div');
const inputCardHolder = document.getElementById('cardholder');
const inputCardNumber = document.getElementById('cardnumber');


const val = e => {
    cardNumber.textContent = e
}

const val2 = e => {
    cardHolderName.textContent = e
}