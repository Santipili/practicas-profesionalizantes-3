window.addEventListener('load', startApp);

function showToDisplay(value, display) {
  display.innerHTML += value;
}

function clearDisplay(display) {
  display.innerHTML = '';
}

function calculate(display) {
  let expression = display.innerHTML;
  let result = eval(expression);
  display.innerHTML = result;
}

function startApp() {
    // creacion de los elemnetos con todas las etiquetas necesarias
    let calculator = document.createElement('div');

    let display = document.createElement('div');
    let result = document.createElement('span');

    let textToDisplay = document.createElement('div');
    let btnNumber7 = document.createElement('button');
    let btnNumber8 = document.createElement('button');
    let btnNumber9 = document.createElement('button');
    let btnOperationPlus = document.createElement('button');
    let btnNumber4 = document.createElement('button');
    let btnNumber5 = document.createElement('button');
    let btnNumber6 = document.createElement('button');
    let btnOperationSubstract = document.createElement('button');
    let btnNumber3 = document.createElement('button');
    let btnNumber2 = document.createElement('button');
    let btnNumber1 = document.createElement('button');
    let btnOperationMultiply = document.createElement('button');
    let btnNumber0 = document.createElement('button');
    let btnComa = document.createElement('button');
    let btnEqual = document.createElement('button');
    let btnOperationDivide = document.createElement('button');

    let btnClear = document.createElement('button');

    // agregando las etiquetas dentro del body y agrupados de la forma correcta

    display.appendChild(result);
    calculator.appendChild(display);

    textToDisplay.appendChild(btnNumber7);
    textToDisplay.appendChild(btnNumber8);
    textToDisplay.appendChild(btnNumber9);
    textToDisplay.appendChild(btnOperationPlus);
    textToDisplay.appendChild(btnNumber4);
    textToDisplay.appendChild(btnNumber5);
    textToDisplay.appendChild(btnNumber6);
    textToDisplay.appendChild(btnOperationSubstract);
    textToDisplay.appendChild(btnNumber3);
    textToDisplay.appendChild(btnNumber2);
    textToDisplay.appendChild(btnNumber1);
    textToDisplay.appendChild(btnOperationMultiply);
    textToDisplay.appendChild(btnNumber0);
    textToDisplay.appendChild(btnComa); 
    textToDisplay.appendChild(btnEqual);
    textToDisplay.appendChild(btnOperationDivide);
    calculator.appendChild(textToDisplay);

    calculator.appendChild(btnClear);

    document.body.appendChild(calculator);

    // asignando clase clase a cada etiqueta 
    calculator.classList.add('calculator');
    display.classList.add('display');
    textToDisplay.classList.add('text_display');
    btnNumber7.classList.add('number');
    btnNumber8.classList.add('number');
    btnNumber9.classList.add('number');
    btnOperationPlus.classList.add('operation');
    btnNumber4.classList.add('number');
    btnNumber5.classList.add('number');
    btnNumber6.classList.add('number');
    btnOperationSubstract.classList.add('operation');
    btnNumber3.classList.add('number');
    btnNumber2.classList.add('number');
    btnNumber1.classList.add('number');
    btnOperationMultiply.classList.add('operation');
    btnNumber0.classList.add('number');
    btnComa.classList.add('number');
    btnEqual.classList.add('equal');
    btnOperationDivide.classList.add('operation');
    btnClear.classList.add('clear');

    // asigno los textos internos de cada boton
    btnNumber7.innerHTML = '7';
    btnNumber8.innerHTML = '8';
    btnNumber9.innerHTML = '9';
    btnOperationPlus.innerHTML = '+';
    btnNumber4.innerHTML = '4';
    btnNumber5.innerHTML = '5';
    btnNumber6.innerHTML = '6';
    btnOperationSubstract.innerHTML = '-';
    btnNumber3.innerHTML = '3';
    btnNumber2.innerHTML = '2';
    btnNumber1.innerHTML = '1';
    btnOperationMultiply.innerHTML = '*';
    btnNumber0.innerHTML = '0';
    btnComa.innerHTML = '.';
    btnEqual.innerHTML = '=';
    btnOperationDivide.innerHTML = '/';
    btnClear.innerHTML = 'Borrar';

    // agrego las funcionalidades de los botones 
    // ------ aqui podria hacer un bucle para disminuir lineas, agregando los botones en un arreglo -------
    btnNumber0.addEventListener("click", function(){showToDisplay(btnNumber0.innerHTML,result)});
    btnNumber1.addEventListener("click", function(){showToDisplay(btnNumber1.innerHTML,result)});
    btnNumber2.addEventListener("click", function(){showToDisplay(btnNumber2.innerHTML,result)});
    btnNumber3.addEventListener("click", function(){showToDisplay(btnNumber3.innerHTML,result)});
    btnNumber4.addEventListener("click", function(){showToDisplay(btnNumber4.innerHTML,result)});
    btnNumber5.addEventListener("click", function(){showToDisplay(btnNumber5.innerHTML,result)});
    btnNumber6.addEventListener("click", function(){showToDisplay(btnNumber6.innerHTML,result)});
    btnNumber7.addEventListener("click", function(){showToDisplay(btnNumber7.innerHTML,result)});
    btnNumber8.addEventListener('click', function(){showToDisplay(btnNumber8.innerHTML,result)});
    btnNumber9.addEventListener('click', function(){showToDisplay(btnNumber9.innerHTML,result)});
    btnComa.addEventListener('click', function(){showToDisplay(btnComa.innerHTML,result)});

    btnOperationPlus.addEventListener('click', function(){showToDisplay(btnOperationPlus.innerHTML,result)})
    btnOperationSubstract.addEventListener('click', function(){showToDisplay(btnOperationSubstract.innerHTML,result)})
    btnOperationMultiply.addEventListener('click', function(){showToDisplay(btnOperationMultiply.innerHTML,result)})
    btnOperationDivide.addEventListener('click', function(){showToDisplay(btnOperationDivide.innerHTML,result)})

    btnEqual.addEventListener('click', function(){calculate(result)});

    btnClear.addEventListener('click', function(){clearDisplay(result)});
};






