
//Declare variables
let prices = [];
let itemNumber = 1;

const prompt = document.querySelector('#prompt');
const input = document.querySelector('#price-input');
const btn = document.querySelector('#add-btn');
const resultsDiv = document.querySelector('#results');
const progressDots = document.querySelectorAll('.progress__dot');

btn.onclick = function(){
    const price = parseFloat(input.value);
    input.value = '';
    input.focus();

    prices.push(price);

    resultsDiv.innerHTML += '<p class ="line line--entry">Item ' + itemNumber + ' added:<span class="price">R' + price.toFixed(2) + '</span></p>';

    //**Five small bars under the input fill in (turn blue) as each item is
    //**added, so there's a visual sense of "2 of 5 items entered" at a glance.

    itemNumber++;

    if(progressDots[itemNumber - 1]){
        progressDots[itemNumber - 1].classList.add('is-filled');
    }

     if(itemNumber <= 5) {
        prompt.textContent = 'Enter the price of item ' + itemNumber + ' (R):';
     } else{
        btn.disabled = true;
        prompt.textContent = 'Basket complete. Here are you results:';
        analyseBasket();
     }

}

//changed h3 tages to classes in order to incorparate more accurate css functionality
analyseBasket = function(){
    resultsDiv.innerHTML += '<div class="divider"></div>';

    const total = prices.reduce( function(acc, price) {
        return acc + price;
    }, 0);

    resultsDiv.innerHTML += '<p class=line line--total">Total cost: <span class="price">R' + total.toFixed(2) + '</span></p>';

    if(total > 500){
        resultsDiv.innerHTML += '<p class="line line--status status--over">Status: Over budget!!!</p>';
    } else if(total > 200){
        resultsDiv.innerHTML += '<p class="line line--status status--high">Status: Getting expensive ! </p>';
    } else if(total > 50){
        resultsDiv.innerHTML += '<p class="line line--status status--ok>Status: Affordable </p>';
    } else {
        resultsDiv.innerHTML += '<p class="line line--status status--low>Status: Cheap </p>';
    }

    const expensive = prices.filter( function(price){
        return price > 50;
    });

    resultsDiv.innerHTML += '<h3 class="section-heading">Items over R50:</h3>';
    if (expensive.length === 0) {
        resultsDiv.innerHTML += '<p class="line line--muted"> None: all items are under R50 </p>';
    } else {
        expensive.forEach(function(price){
            resultsDiv.innerHTML += '<p class="line"><span class="price">R' + price.toFixed(2) + '</span></p>';
        });
    }

    const withVAT = prices.map( function(price) {
        return price * 1.15;
    });

    resultsDiv.innerHTML += '<h3 class="sectio-heading">Pricess including 15% VAT:</h3>';
    withVAT.forEach ( function(vatPrice, index) {
        resultsDiv.innerHTML += '<p class="line">Item ' + (index + 1) + ': <span class="price">R' + vatPrice.toFixed(2) + '</span></p>';
    });


    const sortedPrices = [...prices].sort(function(a, b) {
        return a - b;
    });

    resultsDiv.innerHTML += '<h3 class=section-heading>Prices sorted: from cheapest to most expensive:</h3>';
    sortedPrices.forEach(function(price, index){
        resultsDiv.innerHTML += '<p class="line">Item ' + (index + 1) + ': <span class="price">R' + price.toFixed(2) + '</span></p>';
    });

    const targetPrice = 100;
    const wasEntered = prices.includes (targetPrice);

    resultsDiv.innerHTML += '<div classe="divider"></div>';

    if (wasEntered) {
        resultsDiv.innerHTML += '<p class="line line--check check--yes">R100 item: YES - found in basket .</p>';
    } else {
        resultsDiv.innerHTML += '<p class="line line--check check--no">R100 item : NO = not in basket</p>';
    }

    resultsDiv.innerHTML += '<div class="receipt-tear"><div>';

}