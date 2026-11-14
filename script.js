const amount = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convertBtn = document.getElementById("convertBtn");
const swapBtn = document.getElementById("swapBtn");
const result = document.getElementById("result");

// Sample exchange rates (base currency: USD)
const rates = {
    USD: 1,
    INR: 83,
    EUR: 0.92,
    GBP: 0.79,
    JPY: 150
};

// Currency conversion function
function convertCurrency() {

    const enteredAmount = Number(amount.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (amount.value.trim() === "" ||
        !Number.isFinite(enteredAmount) ||
        enteredAmount <= 0) {

        result.textContent = "Please enter a valid amount";
        return;
    }

    // Convert into USD first
    const amountInUSD = enteredAmount / rates[from];

    // Convert USD into target currency
    const convertedAmount = amountInUSD * rates[to];

    result.textContent =
        `${convertedAmount.toFixed(2)} ${to}`;
}

// Convert button event
convertBtn.addEventListener("click", convertCurrency);

// Swap currencies
swapBtn.addEventListener("click", function () {

    const temp = fromCurrency.value;

    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;

    convertCurrency();
});

// Initial conversion
convertCurrency();