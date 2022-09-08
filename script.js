function myFunc() {
    let x = document.form["form"]["cardholder", "cardnumber", "expdate", "cvc"].value;
    if (x = "") {
        alert("This field is required");
        return false;
    }
}