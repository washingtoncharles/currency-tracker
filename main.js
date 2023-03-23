const cardTitle = document.querySelectorAll('.card-title');
const cardValue = document.querySelectorAll('.card-value');

const production = 'https://api.hgbrasil.com/finance?key=19747001'
const local = 'https://cors-everywhere.onrender.com/https://api.hgbrasil.com/finance?key=19747001'

fetch(`${production}`)
  .then(response => response.json())
  .then(data => {
    const results = data.results;
    console.log(results)
    const currencies = results.currencies;
    const stocks = results.stocks;
    const bitcoin = results.bitcoin;

    cardTitle[0].innerHTML = stocks.IBOVESPA.name;
    cardValue[0].innerHTML = stocks.IBOVESPA.variation + '%';

    cardTitle[1].innerHTML = stocks.IFIX.name;
    cardValue[1].innerHTML = stocks.IFIX.variation + '%';
  })
