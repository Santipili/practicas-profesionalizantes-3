class TicketReportView extends HTMLElement {
    constructor (){
        super();
        this.container = document.createElement('div');
        this.container.classList.add('contenedor');
        this.form = document.createElement('form');

        this.tipeLabel = document.createElement('label');
        this.tipeLabel.innerText = 'Tipo: '
        this.tipeLabel.for = this.selectTipe; 
        this.selectTipe = document.createElement('select');
        this.selectTipe.required = true;
        this.opDisable1 = document.createElement('option');
        this.opDisable1.innerText = 'Seleccione una opcion';
        this.opDisable1.disabled = true;
        this.opDisable1.selected = true;
        this.opNew = document.createElement('option');
        this.opNew.innerText = 'Nuevo Requerimiento';
        this.opFail = document.createElement('option');
        this.opFail.innerText = 'Falla';
        this.selectTipe.appendChild(this.opDisable1);
        this.selectTipe.appendChild(this.opNew);
        this.selectTipe.appendChild(this.opFail); 
        this.form.appendChild(this.tipeLabel);
        this.form.appendChild(this.selectTipe);

        this.priorityLabel = document.createElement('label');
        this.priorityLabel.innerText = 'Prioridad: '
        this.priorityLabel.for = this.selectPriority;         
        this.selectPriority = document.createElement('select');
        this.selectPriority.required = true;
        this.opDisable = document.createElement('option');
        this.opDisable.innerText = 'Seleccione una opcion';
        this.opDisable.disabled = true;
        this.opDisable.selected = true;
        this.opHigh = document.createElement('option');
        this.opHigh.innerText = 'Urgente';
        this.opMiddle = document.createElement('option');
        this.opMiddle.innerText = 'Media';
        this.opLow = document.createElement('option');
        this.opLow.innerText = 'Baja';
        this.selectPriority.appendChild(this.opDisable);
        this.selectPriority.appendChild(this.opHigh);
        this.selectPriority.appendChild(this.opMiddle);
        this.selectPriority.appendChild(this.opLow);        
        this.form.appendChild(this.priorityLabel);
        this.form.appendChild(this.selectPriority);

        this.descriptionLabel = document.createElement('label');
        this.descriptionLabel.innerText = 'Prioridad: '
        this.descriptionLabel.for = this.description; 
        this.description = document.createElement('textarea')
        this.description.rows = 5;
        this.description.cols = 25;
        this.description.value = "Ingresar descripciopn del Ticket"
        this.form.appendChild(this.descriptionLabel);
        this.form.appendChild(this.description);

        this.sendTicket = document.createElement('button');
        this.sendTicket.innerHTML = "Agregar";
        this.form.appendChild(this.sendTicket);

        this.container.appendChild(this.form);



        this.ticketsTable = document.createElement('table');
        this.headTable = document.createElement('thead');
        //this.tr = document.createElement('tr');
        this.bodyTable = document.createElement('tbody');
        this.headTableTipe = document.createElement('th');
        this.headTableTipe.innerText = "Tipo";
        this.headTableDescription = document.createElement('th');
        this.headTableDescription.innerText = "Descripcion";
        this.headTablePriority = document.createElement('th');
        this.headTablePriority.innerText = "Prioridad";
        this.headTable.appendChild(this.headTableTipe);
        this.headTable.appendChild(this.headTableDescription);
        this.headTable.appendChild(this.headTablePriority);
        this.ticketsTable.appendChild(this.headTable);
        this.ticketsTable.appendChild(this.bodyTable);

        this.container.appendChild(this.ticketsTable);

        this.appendChild(this.container);
    }

}

customElements.define('x-tickets-view', TicketReportView);

export {TicketReportView};