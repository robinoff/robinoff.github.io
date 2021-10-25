const form = document.querySelector('.form');

function checkBmi(e, sex, age, height, weight) {
    e.preventDefault();

    const divRes = document.querySelector('.res');
    divRes.textContent = '';

    if (age === '' || height === '' || weight === '' || sex === 'zero') {
        divRes.textContent = 'Podaj dane...nie wstydź się...';
        form.reset();
        return;
    };

    let bmi = weight / ((height / 100) * (height / 100));

    if (sex === 'woman') {
        const ppmW = `${(10*weight)+(6.25*height)-(5*age)-161 } kcal`;
        const div = document.createElement('div');

        div.textContent = `Twoja podstawowa przemiana materii wynosi: ${ppmW}.`;
        divRes.appendChild(div);

    } else {
        const ppmM = `${(10*weight)+(6.25*height)-(5*age) + 5 } kcal`;
        const div = document.createElement('div');

        div.textContent = `Twoja podstawowa przemiana materii wynosi: ${ppmM}.`;
        divRes.appendChild(div);

    };
    
    const divBMI = document.createElement('div');
    divBMI.textContent = `Twoje BMI wynosi, tylko: ${bmi.toFixed(2)}.`;
    divRes.appendChild(divBMI);


    form.reset()

}

form.addEventListener('submit', (e) => checkBmi(e, form.elements.plec.value, form.elements.age.value, form.elements.height.value, form.elements.weight.value));