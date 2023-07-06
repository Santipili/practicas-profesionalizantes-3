class ButtonStateModel
{
	constructor()
	{
		this.value = 0;
	}

	increment()
	{
		this.value = this.value+1;
	}

	read()
	{
		return this.value;
	}
}

class ButtonStateModel2
{
	constructor()
	{
		this.value = 0;
	}

	increment()
	{
        if (this.value < 254){
          this.value = this.value+2;
        }
        else if (this.value == 254){
          this.value = this.value+1;
        }
		
	}

    setStyle(element)
    {
        element.style.backgroundColor = "rgb(255,0, 0)";
    }
  
    changeColour(element)
    {
      element.style.backgroundColor = "rgb("+(255-this.value)+",0, 0)";
    }

	read()
	{
		return this.value;
	}
}

class ButtonStateController
{
	constructor( model, view )
	{
		this.innerModel = model;
		this.innerView = view;
	}

	init()
	{
		this.innerView.setValue( this.innerModel.read() );
        this.innerModel.setStyle(this.innerView.customButton);
        
	}

	onclick()
	{
		this.innerModel.increment();
        this.innerModel.changeColour(this.innerView.customButton);        
		this.innerView.setValue( this.innerModel.read() );
	}
}

class ButtonStateView extends HTMLElement
{
	constructor(modelReference)
	{
		super();

		this.innerModel = modelReference;
		this.innerController = new ButtonStateController(this.innerModel, this);
      
     
		this.customButton = document.createElement('button');
		this.appendChild(this.customButton);
	}

	connectedCallback()
	{
		this.customButton.onclick = ()=> this.innerController.onclick();
		this.innerController.init();
	}

	setValue( value )
	{
		this.customButton.innerText = value.toString();
	}
}

customElements.define('x-button', ButtonStateView );

function main()
{
    let myModel = new ButtonStateModel2();
	let testButton = new ButtonStateView(myModel);
	document.body.appendChild(testButton);
}
