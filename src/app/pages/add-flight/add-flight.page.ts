import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-add-flight',
  standalone: true,
  templateUrl: './add-flight.page.html',
  styleUrls: ['./add-flight.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule] // Import IonicModule here
})
export class AddFlightPage {
  flight = {
    flight_no: '',
    origin: '',
    destination: '',
    time: ''
  };

  constructor(private flightService: FlightService) {}

  submitFlight() {
    this.flightService.addFlight(this.flight).subscribe(
      (response) => {
        console.log('Flight added:', response);
      },
      (error) => {
        console.error('Error adding flight:', error);
      }
    );
  }
}
