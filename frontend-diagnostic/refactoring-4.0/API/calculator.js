import { modelFront } from './frontend/model/model.js';
import { calculatorView } from './frontend/view/view.js';
import { calculatorController } from './frontend/controller/controller.js';


class calculator extends HTMLElement
{
    constructor (){
        // ViewReference, ModelReference

        super();

        this.view = new calculatorView();
        this.model = new modelFront();
        this.controller = new calculatorController(this.view,this.model);

        this.attachShadow({ mode: "open" });

        this.shadowRoot.appendChild(this.view);

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

}

customElements.define('x-calculator', calculator );

export {calculator};

