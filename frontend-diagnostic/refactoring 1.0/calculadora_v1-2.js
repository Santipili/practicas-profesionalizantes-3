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

    let btnNumbers = [];
    for (let i=0; i <10; i++ ) {
      btnNumbers[i] = document.createElement('button');
    }

    let btnOperationPlus = document.createElement('button');
    let btnOperationSubstract = document.createElement('button');
    let btnOperationMultiply = document.createElement('button');
    let btnOperationDivide = document.createElement('button');
    let btnComa = document.createElement('button');
    let btnEqual = document.createElement('button');
    let btnClear = document.createElement('button');

    //------------------------------------------------------------------------------------------------
    // agregando las etiquetas dentro del body y agrupados de la forma correcta

    display.appendChild(result);
    calculator.appendChild(display);

    for (let i=7; i <10; i++ ) {
      textToDisplay.appendChild(btnNumbers[i]);
    }

    textToDisplay.appendChild(btnOperationPlus);

    for (let i=4; i <7; i++ ) {
      textToDisplay.appendChild(btnNumbers[i]);
    }

    textToDisplay.appendChild(btnOperationSubstract);

    for (let i=3; i >0; i-- ) {
      textToDisplay.appendChild(btnNumbers[i]);
    }

    textToDisplay.appendChild(btnOperationMultiply);

    textToDisplay.appendChild(btnNumbers[0]);

    textToDisplay.appendChild(btnComa); 
    textToDisplay.appendChild(btnEqual);
    textToDisplay.appendChild(btnOperationDivide);
    calculator.appendChild(textToDisplay);

    calculator.appendChild(btnClear);

    document.body.appendChild(calculator);

    //------------------------------------------------------------------------------------
    // asignando clase clase a cada etiqueta 

    calculator.classList.add('calculator');
    display.classList.add('display');
    textToDisplay.classList.add('text_display');

    btnOperationPlus.classList.add('operation');
    btnOperationSubstract.classList.add('operation');
    btnOperationMultiply.classList.add('operation');
    btnOperationDivide.classList.add('operation');

    btnEqual.classList.add('equal');
    btnClear.classList.add('clear');
    btnComa.classList.add('number');

    for (let i=0; i <10; i++ ) {
      btnNumbers[i].classList.add('number');
    }

    //-------------------------------------------------------------------------------------
    // asigno los textos internos de cada boton

    btnOperationPlus.innerHTML = '+';
    btnOperationSubstract.innerHTML = '-';
    btnOperationMultiply.innerHTML = '*';
    btnOperationDivide.innerHTML = '/';
    btnComa.innerHTML = '.';
    btnEqual.innerHTML = '=';
    btnClear.innerHTML = 'Borrar';

    for (let i=0; i <10; i++ ) {
      btnNumbers[i].innerHTML = i;
    }

    //----------------------------------------------------------------------------------------------
    // agrego las funcionalidades de los botones 
   
    btnComa.addEventListener('click', function(){showToDisplay(btnComa.innerHTML,result)});

    for (let i=0; i <10; i++ ) {
      btnNumbers[i].addEventListener("click", function(){showToDisplay(btnNumbers[i].innerHTML,result)});
    }

    btnOperationPlus.addEventListener('click', function(){showToDisplay(btnOperationPlus.innerHTML,result)})
    btnOperationSubstract.addEventListener('click', function(){showToDisplay(btnOperationSubstract.innerHTML,result)})
    btnOperationMultiply.addEventListener('click', function(){showToDisplay(btnOperationMultiply.innerHTML,result)})
    btnOperationDivide.addEventListener('click', function(){showToDisplay(btnOperationDivide.innerHTML,result)})

    btnEqual.addEventListener('click', function(){calculate(result)});

    btnClear.addEventListener('click', function(){clearDisplay(result)});
};


