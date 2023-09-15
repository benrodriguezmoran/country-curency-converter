const API_ENDPOINT = 'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_yK5F5B2HZcfDTAFbadAylTvZSv9Oq2I8qoAFZAqk';
var currencies = [
    "EUR",
    "USD",
    "JPY",
    "BGN",
    "CZK",
    "DKK",
    "GBP",
    "HUF",
    "PLN",
    "RON",
    "SEK",
    "CHF",
    "ISK",
    "NOK",
    "HRK",
    "RUB",
    "TRY",
    "AUD",
    "BRL",
    "CAD",
    "CNY",
    "HKD",
    "IDR",
    "ILS",
    "INR",
    "KRW",
    "MXN",
    "MYR",
    "NZD",
    "PHP",
    "SGD",
    "THB",
    "ZAR"
];

 
currencies.forEach(currency => {
    $('.currencyDropdown').forEach(dropdown => {
        dropdown.append(`<option value="${currency}">${currency}</option>`)
    });
});





// Function to convert currency
async function convertCurrency(amount, fromCurrency, toCurrency) {
    try {
        const response = await fetch(`${API_ENDPOINT}?apikey=${API_KEY}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        
        if (data.result === 'success') {
            const convertedAmount = data.conversion_result;
            return convertedAmount;
        } else {
            throw new Error('Currency conversion failed');
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}


// Example usage:
const amount = 100; // Replace with the amount you want to convert
const fromCurrency = 'USD'; // Replace with the source currency code
const toCurrency = 'EUR'; // Replace with the target currency code

convertCurrency(amount, fromCurrency, toCurrency)
    .then((result) => {
        console.log(`Converted amount: ${result}`);
    })
    .catch((error) => {
        console.error('Currency conversion error:', error);
    });
