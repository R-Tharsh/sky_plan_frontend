import { Component } from '@angular/core';
import { FlightService } from '../../flight.service'; // This import is still correct
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.page.html',
  styleUrls: ['./add-flight.page.scss'],
})
export class AddFlightPage {

  flight = {
    flight_no: '',
    origin: '',
    destination: '',
    time: ''
  };

  constructor(private flightService: FlightService, private router: Router) { }

  submitFlight() {
    this.flightService.addFlight(this.flight).subscribe(response => {
      console.log('Flight added successfully', response);
      this.router.navigate(['/']); // Redirect to home page after adding flight
    }, error => {
      console.error('Error adding flight', error);
    });
  }
}
