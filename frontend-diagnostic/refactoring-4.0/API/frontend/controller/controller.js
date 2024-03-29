class calculatorController extends HTMLElement 
{
    constructor(viewReference, modelReference){

        super();

        this.innerView = viewReference;
        this.innerModel = modelReference;

    }

    enable()
	{
        this.innerView.btnNumbers[0].onclick = () => {this.onButton0Click();};
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
      
        this.innerView.btnEqual.addEventListener('click', ()=>{ this.solveExpression() } );
        this.innerView.btnClear.addEventListener('click', ()=>{ this.clearDisplay() } );
	}

	disable()
	{
        this.innerView.btnNumbers[0].onclick = null;
        this.innerView.btnNumbers[1].onclick =null;
        this.innerView.btnNumbers[2].onclick =null;
        this.innerView.btnNumbers[3].onclick =null;
        this.innerView.btnNumbers[4].onclick =null;
        this.innerView.btnNumbers[5].onclick =null;
        this.innerView.btnNumbers[6].onclick = null;
        this.innerView.btnNumbers[7].onclick = null;
        this.innerView.btnNumbers[8].onclick = null;
        this.innerView.btnNumbers[9].onclick = null;
    
        this.innerView.btnComa.onclick = null;
      
        this.innerView.btnOperationPlus.onclick = null;
        this.innerView.btnOperationSubstract.onclick = null;
        this.innerView.btnOperationMultiply.onclick = null;
        this.innerView.btnOperationDivide.onclick = null;
      
        this.innerView.btnEqual.onclick = null;
        this.innerView.btnClear.onclick = null;

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

    async solveExpression() {

        this.innerModel.calculateByPOST(this.innerView.result.innerHTML).then(response =>{
            this.innerView.result.innerHTML = response.message;
            })

    }

    clearDisplay() {
        this.innerView.result.innerHTML = '';
      }
      
};

customElements.define('x-calculator-controller',  calculatorController );
export {calculatorController};