window.onload = function() {
    changeCardDimensions();
};

const priceToggle = document.querySelector('#switch');

const priceList = {
    'annual': [
        199.99, 249.99, 399.99
    ],
    'monthly': [
        19.99, 24.99, 39.99
    ]
}

priceToggle.addEventListener("click", function (e) {
    const isChecked = e.target.checked;
    const prices = document.querySelectorAll('.price');

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerHTML = '$' + (!isChecked ? priceList.annual[i] : priceList.monthly[i]);
    }
});

const changeCardDimensions = () => {
    const tableNode = document.querySelector('.price-card');
    const middleCell = document.querySelector('.table-cell.middle .price-card');

    console.log('change card', tableNode.offsetHeight);
    middleCell.style.height = `calc(${tableNode.offsetHeight}px + 3px)`;
}