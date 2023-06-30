class TicketReportModel {
    constructor(viewReference){
        this.innerView = viewReference;
    } 
    
    addTicket(Tipo,Descripcion,Prioridad){
        let fila = document.createElement('tr');
         let celdaTipo = document.createElement('td');
         let celdaDescripcion = document.createElement('td');
         let celdaPrioridad = document.createElement('td');

        celdaTipo.textContent = Tipo;
        celdaDescripcion.textContent = Descripcion;
        celdaPrioridad.textContent = Prioridad;

        if (Prioridad == "Urgente") {
            celdaPrioridad.style.backgroundColor = "red";
          }
          if (Prioridad == "Media") {
            celdaPrioridad.style.backgroundColor = "yellow";
          }
          if (Prioridad == "Baja") {
            celdaPrioridad.style.backgroundColor = "green";
          }

        fila.appendChild(celdaTipo);
        fila.appendChild(celdaDescripcion);
        fila.appendChild(celdaPrioridad);

        this.innerView.bodyTable.appendChild(fila);
    }
}

export {TicketReportModel}