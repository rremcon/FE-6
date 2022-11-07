//A

function GetTvName(tv) {
    return tv.brand + '' + tv.type + '' + tv.name + '';
}


//B

function GetTvPrice(tv) {
    return tv.price + ',-';
}


//C

function GetScreenSize(size) {
    let screenSize = '';

    for (let i = 0; i < size.length; i++) {
        const inchSize = size[i];
        const cmSize = size[i] * 2.54;

        screenSize = screenSize + inchSize + 'inch' + cmSize + 'cm';

        return screenSize;

    }
}


//D

const tvInformation = document.getElementById('tv-info');

tvInformation.textContent = GetTvName(inventory[0]) + GetTvPrice(inventory[0]) + GetScreenSize(inventory[0].availableSizes);


//E

function allTelevisions(televisions) {
    const televisionList = document.getElementById('all-tv-information');

const tvModels = televisions.map((tv) => {
    return GetTvName(tv) + GetTvPrice(tv) + GetScreenSize(tv.availableSizes);
});


televisionList.textContent = tvModels.join('');
}

allTelevisions(inventory);


