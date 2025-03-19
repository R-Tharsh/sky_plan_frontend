import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AirportDetailPage } from './airport-detail.page';

describe('AirportDetailPage', () => {
  let component: AirportDetailPage;
  let fixture: ComponentFixture<AirportDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
