import {TicketReport} from './src/ticketApp.js';

function starApp(){
    let MyTickets = new TicketReport();

    document.body.appendChild(MyTickets)
}

window.addEventListener('load', starApp);