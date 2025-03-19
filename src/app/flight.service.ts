import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private apiUrl = 'http://localhost:8000/api/flights'; // Adjust URL as needed

  constructor(private http: HttpClient) { }

  // Method to add a flight
  addFlight(flightData: any): Observable<any> {
    return this.http.post(this.apiUrl, flightData);
  }
}
