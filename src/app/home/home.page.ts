import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true, // Mark it as a standalone component
  imports: [IonicModule, FormsModule, CommonModule], // Import necessary modules
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  airportCode: string = '';

  constructor(private router: Router) {}

  goToAirports() {
    if (this.airportCode) {
      this.router.navigate(['/airports'], { queryParams: { code: this.airportCode } });
    } else {
      this.router.navigate(['/airports']);
    }
  }
}
