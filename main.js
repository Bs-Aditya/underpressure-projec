// Currency exchange rates (relative to USD as the base currency)
const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    NOK: 11.0
};

// Function to update prices
function updatePrices() {
    const currency = document.getElementById('currency').value;
    const products = document.querySelectorAll('.product-item p');
    
    products.forEach(product => {
        // Original price in USD (stored in data attribute)
        const basePrice = parseFloat(product.getAttribute('data-usd-price'));

        // Convert price based on selected currency
        const convertedPrice = (basePrice * exchangeRates[currency]).toFixed(2);
        
        // Update the product's price text
        product.textContent = `${currency} ${convertedPrice}`;
    });
}

// Event listener for currency selection
document.getElementById('currency').addEventListener('change', updatePrices);

// Initial price setup on page load
document.addEventListener('DOMContentLoaded', updatePrices);
