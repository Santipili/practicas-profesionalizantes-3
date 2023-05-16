window.addEventListener('load', startApp);
let display = document.createElement('div');


//debo sacar los parametros de la funcion, el display crearlo global y el valor puedo accerder porq es el boton q ejecuta esa funcion
 function showToDisplay(value) {
   result.innerHTML += value;
 }
let result = document.createElement('span');

//no me esta bien utilizar esto porq rompe la caracteristica de abierto cerra
// function showToDisplay( ) {
//   result.innerHTML +=  this.innerHTML
// }

//debo crear una funcion 'OnClick' por cada boton para especificar que agregan al display
// button.onclick = () => {}     esto es lo mismo que utilizar el eventlistener de click

function clearDisplay() {
  result.innerHTML = '';
}

function calculate() {
  let expression = result.innerHTML;
  let resultado = eval(expression);
  result.innerHTML = resultado;

  // result.innerHTML = eval(result.innerHTML);
}

function startApp() {
    // creacion de los elemnetos con todas las etiquetas necesarias
    let calculator = document.createElement('div');

    

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
   
    btnComa.addEventListener('click', function(){showToDisplay(btnComa.innerHTML)});

    for (let i=0; i <10; i++ ) {
      btnNumbers[i].onclick=()=>{result += i};
    }
    btnOperationPlus.onclick=()
    btnOperationPlus.addEventListener('click', showToDisplay(btnOperationPlus.innerHTML))
    btnOperationSubstract.addEventListener('click', showToDisplay(btnOperationSubstract.innerHTML))
    btnOperationMultiply.addEventListener('click', showToDisplay(btnOperationMultiply.innerHTML))
    btnOperationDivide.addEventListener('click', showToDisplay(btnOperationDivide.innerHTML))

    btnEqual.addEventListener('click', calculate);

    btnClear.addEventListener('click', clearDisplay);
};

