import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AirportService } from '../../services/airport.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-airports',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './airports.page.html',
  styleUrls: ['./airports.page.scss'],
})
export class AirportsPage implements OnInit {
  airports: any[] = [];
  currentPage = 1;
  perPage = 10;
  totalPages = 1;

  constructor(private airportService: AirportService) {}

  ngOnInit() {
    this.loadAirports();
  }

  loadAirports() {
    this.airportService.getAirports(this.currentPage, this.perPage).subscribe(response => {
      this.airports = response.data.data;
      this.totalPages = response.data.last_page;
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadAirports();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadAirports();
    }
  }
  
}
