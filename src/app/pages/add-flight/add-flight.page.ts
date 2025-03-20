import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightService } from '../../services/flight.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
    origin: '',   // Full origin string (not just the first letter)
    destination: '',  // Full destination string (not just the first letter)
    time: '',
    origin_ident: '', // Selected origin ident
    destination_ident: '' // Selected destination ident
  };

  originIdents: string[] = [];
  destinationIdents: string[] = [];

  constructor(private flightService: FlightService, private http: HttpClient) {}

  submitFlight() {
    // Make sure to send the full origin and destination along with their respective ident values
    const flightData = {
      flight_no: this.flight.flight_no,
      origin: this.flight.origin, // Full origin
      destination: this.flight.destination, // Full destination
      time: this.flight.time,
      origin_ident: this.flight.origin_ident, // Ident of the origin selected
      destination_ident: this.flight.destination_ident // Ident of the destination selected
    };

    this.flightService.addFlight(flightData).subscribe(
      (response) => {
        console.log('Flight added:', response);
      },
      (error) => {
        console.error('Error adding flight:', error);
      }
    );
  }

  loadOriginIdent(event: any) {
    const letter = event.target.value[0].toUpperCase(); // Get first letter and convert to uppercase
    if (letter) {
      this.http.get(`${environment.apiUrl}/airport/search/${letter}`).subscribe(
        (data: any) => {
          this.originIdents = data.data.map((airport: any) => airport.ident); // Assume 'ident' is the identifier field
        },
        (error) => {
          console.error('Error fetching origin idents:', error);
        }
      );
    } else {
      this.originIdents = [];
    }
  }

  loadDestinationIdent(event: any) {
    const letter = event.target.value[0].toUpperCase(); // Get first letter and convert to uppercase
    if (letter) {
      this.http.get(`${environment.apiUrl}/airport/search/${letter}`).subscribe(
        (data: any) => {
          this.destinationIdents = data.data.map((airport: any) => airport.ident); // Assume 'ident' is the identifier field
        },
        (error) => {
          console.error('Error fetching destination idents:', error);
        }
      );
    } else {
      this.destinationIdents = [];
    }
  }
}
