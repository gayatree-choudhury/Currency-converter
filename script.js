const amount = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");

const convertBtn = document.getElementById("convertBtn");
const swapBtn = document.getElementById("swapBtn");
const resetBtn = document.getElementById("resetBtn");

const result = document.getElementById("result");
const exchangeRate = document.getElementById("exchangeRate");

// Sample exchange rates based on USD
const rates = {
    USD: 1,
    INR: 83,
    EUR: 0.92,
    GBP: 0.79,
    JPY: 150,
    AUD: 1.52,
    CAD: 1.36,
    AED: 3.67,
    CNY: 7.25,
    CHF: 0.88
};

// Currency symbols
const symbols = {
    USD: "$",
    INR: "₹",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
    AUD: "A$",
    CAD: "C$",
    AED: "د.إ",
    CNY: "¥",
    CHF: "CHF"
};

// Currency conversion
function convertCurrency() {

    const enteredAmount = Number(amount.value);

    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (
        amount.value.trim() === "" ||
        !Number.isFinite(enteredAmount) ||
        enteredAmount <= 0
    ) {
        result.textContent = "Enter a valid amount";
        exchangeRate.textContent = "";
        return;
    }

    // Convert into USD
    const amountInUSD = enteredAmount / rates[from];

    // Convert into target currency
    const convertedAmount = amountInUSD * rates[to];

    // Calculate exchange rate
    const rate = rates[to] / rates[from];

    result.textContent =
        `${symbols[to]} ${convertedAmount.toFixed(2)} ${to}`;

    exchangeRate.textContent =
        `1 ${from} = ${rate.toFixed(4)} ${to}`;
}

// Swap currencies
function swapCurrencies() {

    const temp = fromCurrency.value;

    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;

    convertCurrency();
}

// Reset converter
function resetConverter() {

    amount.value = 1;
    fromCurrency.value = "USD";
    toCurrency.value = "INR";

    convertCurrency();
}

// Event listeners
convertBtn.addEventListener("click", convertCurrency);

swapBtn.addEventListener("click", swapCurrencies);

resetBtn.addEventListener("click", resetConverter);

// Automatic conversion
amount.addEventListener("input", convertCurrency);

fromCurrency.addEventListener("change", convertCurrency);

toCurrency.addEventListener("change", convertCurrency);

// Initial conversion
convertCurrency();