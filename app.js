function Click() {
    let inputValue = document.querySelector('#valueinput');
    let value = inputValue.value;
    let valuenumber = parseFloat(value);
    let valueindolar = valuenumber*1.26;
    let fixedvalue = valueindolar.toFixed(2);

    const divResult = `<div>$ ${fixedvalue}</div>`;
    const firstDiv = document.querySelector('#resultDiv');
    firstDiv.insertAdjacentHTML('beforeend', divResult);
    };