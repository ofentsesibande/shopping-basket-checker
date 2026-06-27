
//Declare variables
let prices = [];
let itemNumber = 1;

const prompt = document.querySelector('#prompt');
const input = document.querySelector('#price-input');
const btn = document.querySelector('#add-btn');
const resultsDiv = document.querySelector('#results');

btn.onclick = function(){
    const price = parseFloat(input.value);
    input.value = '';
    input.focus();

    prices.push(price);

    resultsDiv.innerHTML += '<h3>Item' + itemNumber + 'added: R' + price.toFixed(2) + '</h3>';

    itemNumber++;
     if (itemNumber <= 5) {
        prompt.textContent = 'Enter the price of item ' + itemNumber + ' (R):';
     } else{
        btn.disabled = true;
        prompt.textContent = 'Basket complete. Here are you results:';
        analyseBasket();
     }

}

analyseBasket = function(){
    const total = prices.reduce( function(acc, price) {
        return acc + price;
    }, 0);

    resultsDiv.innerHTML += '<h3>Total cost: R' + total.toFixed(2) + '</h3>';

    if(total > 500){
        resultsDiv.innerHTML += '<h3>Status: Over budget!!!</h3>';
    } else if(total > 200){
        resultsDiv.innerHTML += '<h3>Status: Getting expensive ! </h3>';
    } else if(total > 50){
        resultsDiv.innerHTML += '<h3>Status: Affordable </h3>';
    } else {
        resultsDiv.innerHTML += '<h3>Status: Cheap </h3>';
    }

    const expensive = prices.filter( function(price){
        return price > 50;
    });

    resultsDiv.innerHTML += '<h3>Items over R50:</h3>';
    if (expensive.length === 0) {
        resultsDiv.innerHTML += '<h3> None: all items are under R50 </h3>';
    } else {
        expensive.forEach(function(price){
            resultsDiv.innerHTML += '<h3> R' + price.toFixed(2) + '</h3>';
        });
    }

    const withVAT = prices.map( function(price) {
        return price * 1.15;
    });

    resultsDiv.innerHTML += '<h3>Pricess including 15% VAT:</h3>';
    withVAT.forEach ( function(vatPrice, index) {
        resultsDiv.innerHTML += '<h3>Item ' + (index + 1) + ': R' + vatPrice.toFixed(2) + '</h3>';
    });


    const sortedPrices = [...prices].sort(function(a, b) {
        return a - b;
    });

    resultsDiv.innerHTML += '<h3>Prices sorted from cheapest to most expensive:</h3>';
    sortedPrices.forEach(function(price, index){
        resultsDiv.innerHTML += '<h3>Item ' + (index + 1) + ': R' + price.toFixed(2) + '</h3>';
    });

    const targetPrice = 100;
    const wasEntered = prices.includes (targetPrice);

    if (wasEntered) {
        resultsDiv.innerHTML += '<h3>R100 item: YES - found in basket .</h3>';
    } else {
        resultsDiv.innerHTML += '<h3>R100 item : NO = not in basket</h3>';
    }

}