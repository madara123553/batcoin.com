let notCoins = 1000; // Starting balance

function updateBalance() {
    document.getElementById('balance').innerText = `Balance: ${notCoins} NotCoins`;
}

function buyTurbo() {
    if (notCoins >= 100) {
        notCoins -= 100;
        alert('You bought a Turbo Boost!');
        updateBalance();
    } else {
        alert('Not enough NotCoins!');
    }
}

function buyCharge() {
    if (notCoins >= 200) {
        notCoins -= 200;
        alert('You bought a Charge Boost!');
        updateBalance();
    } else {
        alert('Not enough NotCoins!');
    }
}

function buySuper() {
    if (notCoins >= 500) {
        notCoins -= 500;
        alert('You bought a Super Boost!');
        updateBalance();
    } else {
        alert('Not enough NotCoins!');
    }
}

document.addEventListener('DOMContentLoaded', updateBalance);
