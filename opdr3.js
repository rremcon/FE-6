//A

const tvBrands = document.getElementById('television-brands');

const brands = inventory.map((tv) => {
    return tv.brand;
});

tvBrands.textContent = brands


//B

function televisionBrands(televisions) {
    const tvBrands = document.getElementById
    ('television-brands');

    const brands = televisions.map((tv) => {
        return tv.brand;
    });

    tvBrands.textContent = brands
}

televisionBrands(inventory);

