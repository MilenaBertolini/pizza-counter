let form = document.getElementById('counter-form');
let counterList = document.getElementById('counter');
var cont = 0;

form.onsubmit = function(e) {
    e.preventDefault();
    const inputField = document.getElementById('counter-input');
    addCounter(inputField.value );
    form.reset();
};

let currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function addCounter(description) {
    const counterContainer = document.createElement('div');
    const newCounter = document.createElement('input');
    const counterLabel = document.createElement('label');
    const subtract = document.createTextNode('-');
    var number = document.createElement('span');
    const sum = document.createTextNode('+');
    const counterZero = document.createTextNode('0');
    const counterDescriptionNode = document.createTextNode(description);
    
    newCounter.setAttribute('type', 'hidden');
    newCounter.setAttribute('name', description);
    newCounter.setAttribute('id', description);

    counterLabel.setAttribute('for', description);
    counterLabel.appendChild(counterDescriptionNode);
    
    number.setAttribute('class', 'value') ;
    number.setAttribute('id', `current`);
    number.appendChild(counterZero);
    
    var counterValueLess = document.createElement('button'),
    count = 0;
    counterValueLess.addEventListener('click', function(){
        if(count == 0) return;
        count -=1;
        number.textContent = count;
    })
    
    counterValueLess.setAttribute('class', 'minus');
    counterValueLess.setAttribute('id', `${cont}`);
    counterValueLess.appendChild(subtract);

    var counterValueMore = document.createElement('button'),
    count = 0;
    counterValueMore.addEventListener('click', function(){
        count +=1;
        number.textContent = count;
    })

    counterValueMore.setAttribute('class', 'plus');
    counterValueMore.setAttribute('id', `${cont}`);
    counterValueMore.appendChild(sum);


    counterContainer.classList.add('counter-item');
    counterContainer.appendChild(newCounter);
    counterContainer.appendChild(counterLabel);
    counterContainer.appendChild(counterValueLess);
    counterContainer.appendChild(number);
    counterContainer.appendChild(counterValueMore);
    counterList.appendChild(counterContainer);

    cont = cont + 1;
}