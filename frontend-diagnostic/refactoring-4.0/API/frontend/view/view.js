


class calculatorView extends HTMLElement 
{
    constructor()
    {
        super();

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
        this.appendChild(this.container);

    }

    connectedCallback()
	{
		this.controller.enable();
	}

	disconnectedCallback()
	{
		this.controller.disable();
	}

	adoptedCallback()
	{
		//Not yet
	}

	attributeChangedCallback( newValue, oldValue )
	{

	}

	static get observedAttributes()
	{
		return [];
	}

};


customElements.define('x-calculator-view',  calculatorView );

export {calculatorView};