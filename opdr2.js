//A

let soldTvNumber = 0;

for (let i = 0; i < inventory.length; i++) {
    soldTvNumber = soldTvNumber + inventory[i].sold;
}

console.log(soldTvNumber);


const soldTelevisionsNr = document.getElementById('sold-tv-number');
soldTelevisionsNr.textContent = soldTvNumber


//B CSS


//C

let buyedTvNumber = 0;

for (let i = 0; i < inventory.length; i++) {
    buyedTvNumber = buyedTvNumber + inventory[i].originalStock;
}

console.log(buyedTvNumber);


const buyedTelevisionsNr = document.getElementById('buyed-tv-number');
buyedTelevisionsNr.textContent = buyedTvNumber


//D CSS


//E

const televisionsNrToSell = document.getElementById('tv-number-to-sell');
televisionsNrToSell.textContent = buyedTvNumber - soldTvNumber