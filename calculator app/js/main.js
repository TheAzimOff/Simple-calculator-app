let toggler = document.querySelector('.toggler');
function clearScreen() {
    document.getElementById('display').value = "";
}

function toDisplay(value) {
    document.getElementById("display").value += value;
}