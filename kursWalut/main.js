function createHtml() {

    const divWrapper = document.createElement('div');
    divWrapper.className = 'wrapper';

    document.body.appendChild(divWrapper);

    const h1Title = document.createElement('h1');
    h1Title.className = 'title';
    h1Title.innerHTML = 'Średnie kursy walut - aktualne notowanie NBP z dnia ';

    divWrapper.appendChild(h1Title)

    const formForm = document.createElement('form');
    formForm.className = 'form';

    const inputSearch = document.createElement('input');
    inputSearch.className = 'search';
    inputSearch.setAttribute('name', 'search');
    inputSearch.setAttribute('placeholder', 'podaj szukaną frazę np: peso...');
    inputSearch.setAttribute('type', 'text');

    const inputSubmit = document.createElement('input');
    inputSubmit.className = 'submit';
    inputSubmit.setAttribute('value', 'Szukaj...');
    inputSubmit.setAttribute('type', 'submit');

    divWrapper.appendChild(formForm);
    formForm.appendChild(inputSearch);
    formForm.appendChild(inputSubmit);

    const divRes = document.createElement('div');
    divRes.className = 'res';
    divWrapper.appendChild(divRes);
}
createHtml();


function showData(timeData) {
    const spanData = document.createElement('span');
    spanData.textContent = `${timeData}`;
    spanData.className = 'data';
    document.querySelector('h1.title').appendChild(spanData);
}



function showTable(charge, div) {

    for (const item of charge) {
        let name = item.currency;
        let value = item.mid;
        let code = item.code;
       
        let elem = document.createElement('div');
        // elem.className = `${code}`;
        // elem.setAttribute('option', `${name}`);
        elem.innerHTML = `<span>Nazwa waluty : <strong class='name'>${name}</strong></span><span>Kod waluty : <strong>${code}</strong></span><span>Kurs : <strong>${value}</strong>&nbsp&nbsp&nbspPLN</span>`;

        div.appendChild(elem);


    }
};

function searchTable(e) {
    e.preventDefault();

    const res = document.querySelector('.res');
    res.innerHTML = '';

    const searchEl = form.elements.search.value.toLowerCase();
    if (searchEl === '' || searchEl === ' ') {
        return;
    }

    let list = [...document.querySelectorAll('strong.name')];


    let listCode = list.filter((item, index) => {
        return item.textContent.toLowerCase().includes(searchEl);
    });
    if(listCode.length === 0) {
        document.querySelector('.res').innerHTML = '<p>Podana fraza nie istnieje...szukaj dalej...</p>';
    }
    
    listCode.forEach((item) => {
        document.querySelector('.res').appendChild(item.parentNode.parentNode.cloneNode(true));
    })

    // const res = document.getElementsByClassName(searchEl);
    // document.querySelector('.res').innerHTML = res[0].innerHTML;

    form.reset();

}

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => searchTable(e));



fetch('https://api.nbp.pl/api/exchangerates/tables/A/', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json'
        }
    }).then((response) => response.json())
    .then((data) => {
        // console.log(data[0]);
        const timeData = data[0].effectiveDate;
        const charge = data[0].rates;
        const div = document.querySelector('.wrapper');

        return showTable(charge, div), showData(timeData);
    }).catch((err) => {

        console.log(new Error(err));
    });

fetch('https://api.nbp.pl/api/exchangerates/tables/B/', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json'
        }
    }).then((response) => response.json())
    .then((data) => {
        // console.log(data[0].rates);
        const charge = data[0].rates;
        const div = document.querySelector('.wrapper');

        return showTable(charge, div);
    }).catch((err) => {

        console.log(new Error(err));
    });

const inpSub = document.querySelector('.submit');
inpSub.addEventListener('touchstart', function() {
    this.classList.toggle('blue');
})