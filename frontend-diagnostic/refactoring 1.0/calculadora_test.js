window.addEventListener('load', startApp);

function clearDisplay() {
  result.innerHTML = '';
}

function calculate() {
  result.innerHTML = eval(result.innerHTML)
}
// import "./calculadora.js";

let display = document.createElement('div');
let result = document.createElement('span');

function startApp() {
    // creacion de los elemnetos con todas las etiquetas necesarias
    let calculator = document.createElement('div');

    let btnNumbers = [];
    for (let i=0; i <10; i++ ) {
      btnNumbers[i] = document.createElement('button');
    }
    let textToDisplay = document.createElement('div');

    let btnOperationPlus = document.createElement('button');

    let btnOperationSubstract = document.createElement('button');

    let btnOperationMultiply = document.createElement('button');

    let btnComa = document.createElement('button');
    let btnEqual = document.createElement('button');
    let btnOperationDivide = document.createElement('button');

    let btnClear = document.createElement('button');

//------------------------------------------------------------------------------------------------
    // agregando las etiquetas dentro del body y agrupados de la forma correcta

    display.appendChild(result);
    calculator.appendChild(display);

     textToDisplay.appendChild(btnNumbers[7]);
     textToDisplay.appendChild(btnNumbers[8]);
     textToDisplay.appendChild(btnNumbers[9]);

    textToDisplay.appendChild(btnOperationPlus);

     textToDisplay.appendChild(btnNumbers[4]);
     textToDisplay.appendChild(btnNumbers[5]);
     textToDisplay.appendChild(btnNumbers[6]);   

    textToDisplay.appendChild(btnOperationSubstract);

     textToDisplay.appendChild(btnNumbers[3]);
     textToDisplay.appendChild(btnNumbers[2]);
     textToDisplay.appendChild(btnNumbers[1]);    

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
  
    btnComa.classList.add('number');
    btnEqual.classList.add('equal');
    
    btnClear.classList.add('clear');

    for (let i=0; i <10; i++ ) {
      btnNumbers[i].classList.add('number');
    }



//-------------------------------------------------------------------------------------
    // asigno los textos internos de cada boton

    btnOperationPlus.innerHTML = '+';
  
    btnOperationSubstract.innerHTML = '-';
  
    btnOperationMultiply.innerHTML = '*';
    
    btnComa.innerHTML = '.';
    btnEqual.innerHTML = '=';
    btnOperationDivide.innerHTML = '/';
    btnClear.innerHTML = 'Borrar';

    for (let i=0; i <10; i++ ) {
      btnNumbers[i].innerHTML= i;
    }


//----------------------------------------------------------------------------------------------
    // agrego las funcionalidades de los botones 
    // ------ aqui podria hacer un bucle para disminuir lineas, agregando los botones en un arreglo -------

    
    for (let i=0; i <10; i++ ) { btnNumbers[i].onclick =() =>{result.innerHTML += i}; }

    btnComa.onclick =() =>{result.innerHTML += "."};

    btnOperationPlus.onclick =() =>{result.innerHTML += "+"};
    btnOperationSubstract.onclick =() =>{result.innerHTML += "-"};
    btnOperationMultiply.onclick =() =>{result.innerHTML += "*"};
    btnOperationDivide.onclick =() =>{result.innerHTML += "/"};

    btnEqual.addEventListener('click', calculate);

    btnClear.addEventListener('click', clearDisplay);
};

