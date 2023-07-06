import {TicketReportView} from "./view/TicketReportView.js"
import {TicketReportModel} from "./model/TicketReportModel.js"
import {TicketReportController} from "./controller/TicketReportController.js"


class TicketReport extends HTMLElement{
    constructor(){
        super();
        this.view = new TicketReportView()
        this.model = new TicketReportModel(this.view);
        this.controller = new TicketReportController(this.view, this.model);

        let style = document.createElement('style');
        style.innerText = `@import './src/public/style.css'`;

        this.appendChild(style);
        this.appendChild(this.view);
    }

    connectedCallback() {
        
    }

    disconnectedCallback() {
        
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

customElements.define("x-ticket-report", TicketReport);

export {TicketReport};
