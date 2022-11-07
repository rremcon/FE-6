//A

const typeNamesTv = inventory.map((tv) => {
    return tv.type;
})

console.log(typeNamesTv);


//B

const tvIsSoldOut = inventory.filter((tv) => {
  return tv.originalStock === tv.sold;
})

console.log(tvIsSoldOut);


//C

const tvWithAmbilight = inventory.filter((tv) => {
    return tv.options.ambiLight === true;
})

console.log(tvWithAmbilight);


//D

function sortPriceTv(tv) {
    return tv.sort((a, b) => {
        if (a.price < b.price) {
            return 1;
        }

        if (a.price > b.price) {
            return -1;
        }

        sortPriceTv(inventory)
    });

}

