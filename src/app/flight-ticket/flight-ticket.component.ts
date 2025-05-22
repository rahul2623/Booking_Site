import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flight-ticket',
  imports: [FormsModule],
  templateUrl: './flight-ticket.component.html',
  styleUrl: './flight-ticket.component.css'
})
export class FlightTicketComponent {
 getFlights(){
  alert("Search Flights .....")
}
}
