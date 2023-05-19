
class view{
    constructor(){
        this.result = document.createElement('span');
        
        this.display = document.createElement('div');
        this.display.classList.add('display');
        this.display.appendChild(this.result);

        this.btnNumbers = [];
        for (let i=0; i <10; i++ ) {
            this.btnNumbers[i] = document.createElement('button');
            this.btnNumbers[i].innerHTML= i;
            this.btnNumbers[i].classList.add('number');
            this.btnNumbers[i].classList.add('button_classic');
        }
        
        this.btnOperationPlus = document.createElement('button');
        this.btnOperationPlus.innerHTML = '+';
        this.btnOperationPlus.classList.add('operation');
        this.btnOperationPlus.classList.add('button_classic');
        
        this.btnOperationSubstract = document.createElement('button');
        this.btnOperationSubstract.innerHTML = '-';
        this.btnOperationSubstract.classList.add('operation');
        this.btnOperationSubstract.classList.add('button_classic');

        this.btnOperationMultiply = document.createElement('button');
        this.btnOperationMultiply.innerHTML = '*';
        this.btnOperationMultiply.classList.add('operation');
        this.btnOperationMultiply.classList.add('button_classic');

        this.btnOperationDivide = document.createElement('button');
        this.btnOperationDivide.innerHTML = '/';
        this.btnOperationDivide.classList.add('operation');
        this.btnOperationDivide.classList.add('button_classic');

        this.btnComa = document.createElement('button');
        this.btnComa.innerHTML = '.';
        this.btnComa.classList.add('number');
        this.btnComa.classList.add('button_classic');

        this.btnEqual = document.createElement('button');
        this.btnEqual.innerHTML = '=';
        this.btnEqual.classList.add('equal');
        this.btnEqual.classList.add('button_classic');

        this.textToDisplay = document.createElement('div');
        this.textToDisplay.classList.add('text_to_display');
        this.textToDisplay.appendChild(this.btnNumbers[7]);
        this.textToDisplay.appendChild(this.btnNumbers[8]);
        this.textToDisplay.appendChild(this.btnNumbers[9]);
        this.textToDisplay.appendChild(this.btnOperationPlus);
        this.textToDisplay.appendChild(this.btnNumbers[4]);
        this.textToDisplay.appendChild(this.btnNumbers[5]);
        this.textToDisplay.appendChild(this.btnNumbers[6]);   
        this.textToDisplay.appendChild(this.btnOperationSubstract);
        this.textToDisplay.appendChild(this.btnNumbers[3]);
        this.textToDisplay.appendChild(this.btnNumbers[2]);
        this.textToDisplay.appendChild(this.btnNumbers[1]);    
        this.textToDisplay.appendChild(this.btnOperationMultiply);
        this.textToDisplay.appendChild(this.btnNumbers[0]);    
        this.textToDisplay.appendChild(this.btnComa); 
        this.textToDisplay.appendChild(this.btnEqual);
        this.textToDisplay.appendChild(this.btnOperationDivide);
        
        this.btnClear = document.createElement('button');
        this.btnClear.innerHTML = 'Borrar';
        this.btnClear.classList.add('clear');
        this.btnClear.classList.add('button_classic');

        this.container = document.createElement('div');
        this.container.classList.add('calculator');
        this.container.appendChild(this.display);
        this.container.appendChild(this.textToDisplay);
        this.container.appendChild(this.btnClear);
        
    }

};

class controller{
    constructor(viewReference, modelReference){

        this.innerView = viewReference;
        this.innerModel = modelReference;

        this.innerView.btnNumbers[0].onclick =() =>{this.onButton0Click();};
        this.innerView.btnNumbers[1].addEventListener('click', ()=>{ this.onButton1Click() } );
        this.innerView.btnNumbers[2].addEventListener('click', ()=>{ this.onButton2Click() } );
        this.innerView.btnNumbers[3].addEventListener('click', ()=>{ this.onButton3Click() } );
        this.innerView.btnNumbers[4].addEventListener('click', ()=>{ this.onButton4Click() } );
        this.innerView.btnNumbers[5].addEventListener('click', ()=>{ this.onButton5Click() } );
        this.innerView.btnNumbers[6].addEventListener('click', ()=>{ this.onButton6Click() } );
        this.innerView.btnNumbers[7].addEventListener('click', ()=>{ this.onButton7Click() } );
        this.innerView.btnNumbers[8].addEventListener('click', ()=>{ this.onButton8Click() } );
        this.innerView.btnNumbers[9].addEventListener('click', ()=>{ this.onButton9Click() } );
    
        this.innerView.btnComa.onclick =() =>{this.innerView.result.innerHTML += "."};
      
        this.innerView.btnOperationPlus.onclick =() =>{this.innerView.result.innerHTML += "+"};
        this.innerView.btnOperationSubstract.onclick =() =>{this.innerView.result.innerHTML += "-"};
        this.innerView.btnOperationMultiply.onclick =() =>{this.innerView.result.innerHTML += "*"};
        this.innerView.btnOperationDivide.onclick =() =>{this.innerView.result.innerHTML += "/"};
      
        this.innerView.btnEqual.addEventListener('click', ()=>{ this.calculate() } );
        this.innerView.btnClear.addEventListener('click', ()=>{ this.clearDisplay() } );
       

    }

    onButton0Click(){
        this.innerView.result.innerHTML += 0;
    }
    onButton1Click(){
        this.innerView.result.innerHTML += 1;
    }
    onButton2Click(){
        this.innerView.result.innerHTML += 2;
    }
    onButton3Click(){
        this.innerView.result.innerHTML += 3;
    }
    onButton4Click(){
        this.innerView.result.innerHTML += 4;
    }
    onButton5Click(){
        this.innerView.result.innerHTML += 5;
    }
    onButton6Click(){
        this.innerView.result.innerHTML += 6;
    }
    onButton7Click(){
        this.innerView.result.innerHTML += 7;
    }
    onButton8Click(){
        this.innerView.result.innerHTML += 8;
    }
    onButton9Click(){
        this.innerView.result.innerHTML += 9;
    }

    calculate(expresion) {
        this.innerView.result.innerHTML = this.innerModel.calculate(this.innerView.result.innerHTML);
    }

    clearDisplay() {
        this.innerView.result.innerHTML = '';
      }
      
};

class model{
    constructor(){        
    }
  
    calculate(expresion){
        return eval(expresion);
    }
};

 class calculator
 {
     constructor (){
         this.view = new view();
         this.model = new model();
         this.controller = new controller(this.view,this.model);
     }
 }


// module.exports = calculator;
// export {calculator}

    function startApp() {
      let calculatorView = new view();
      let calculatorModel = new model();
      let calculatorController = new controller(calculatorView,calculatorModel);

      document.body.appendChild(calculatorView.container);
    }
  
    window.addEventListener('load', startApp);



