import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AirportService } from '../../services/airport.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-airport-detail',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './airport-detail.page.html',
  styleUrls: ['./airport-detail.page.scss'],
})
export class AirportDetailPage implements OnInit {
  airportId!: string;
  airport: any;

  constructor(private route: ActivatedRoute, private airportService: AirportService) {}

  ngOnInit() {
    this.airportId = this.route.snapshot.paramMap.get('id')!;
    this.getAirportDetails();
  }

  getAirportDetails() {
    this.airportService.getAirportById(this.airportId).subscribe(response => {
      this.airport = response.data;
    });
  }
}
