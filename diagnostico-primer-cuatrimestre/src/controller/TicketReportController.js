class TicketReportController {
    constructor(viewReference, modelReference){
        this.innerView = viewReference;
        this.innerModel = modelReference;

        this.innerView.sendTicket.addEventListener("click", (event) => {
            event.preventDefault();
            if (confirm("¿Estás seguro de agregar la solicitud de ticket?")) {
                this.onButtonSendClick();
            } 
            
        });
    }

    onButtonSendClick() {
        
        let Tipo = this.innerView.selectTipe.value;
        let Descripcion = this.innerView.description.value;
        let Prioridad = this.innerView.selectPriority.value;
        
        this.innerModel.addTicket(Tipo,Descripcion,Prioridad);

    }
}

export {TicketReportController}