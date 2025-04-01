// Your code here
const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    let left = parseInt(dodger.style.left) || 0;
    if (left > 0) {
        dodger.style.left = `${left - 10}px`;
    }
}

function moveDodgerRight() {
    let left = parseInt(dodger.style.left) || 0;
    if (left < 360) {  // Assuming 400px wide container with 40px wide dodger
        dodger.style.left = `${left + 10}px`;
    }
}
