let exchangeRates = {};

async function fetchExchangeRates() {
    const response = await fetch('https://open.er-api.com/v6/latest/PHP'); // Using PHP as the base currency
    if (response.ok) {
        const data = await response.json();
        exchangeRates = data.rates;
        populateCurrencyOptions();
    } else {
        console.error('Failed to fetch exchange rates');
        document.getElementById('result').innerText = "Error fetching exchange rates.";
    }
}

function populateCurrencyOptions() {
    const currencyCodes = Object.keys(exchangeRates);
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');

    currencyCodes.forEach(currency => {
        const optionFrom = document.createElement('option');
        optionFrom.value = currency;
        optionFrom.textContent = currency;
        fromCurrencySelect.appendChild(optionFrom);

        const optionTo = document.createElement('option');
        optionTo.value = currency;
        optionTo.textContent = currency;
        toCurrencySelect.appendChild(optionTo);
    });
}

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').innerText = "Please enter a valid amount.";
        document.getElementById('result').style.display = "block";
        return;
    }

    if (fromCurrency === toCurrency) {
        document.getElementById('result').innerText = "You must choose different currencies.";
        document.getElementById('result').style.display = "block";
        return;
    }

    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];

    const amountInPHP = amount / fromRate; // Convert to PHP
    const convertedAmount = amountInPHP * toRate; // Convert to target currency
    document.getElementById('result').innerText = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
    document.getElementById('result').style.display = "block";
}

function flipCurrencies() {
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    
    const fromCurrency = fromCurrencySelect.value;
    fromCurrencySelect.value = toCurrencySelect.value;
    toCurrencySelect.value = fromCurrency;

    // Optionally convert the currency again after flipping
    convertCurrency();
}

// Initialize exchange rates when the page loads
window.onload = fetchExchangeRates;
