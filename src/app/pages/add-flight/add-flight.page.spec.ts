import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddFlightPage } from './add-flight.page';

describe('AddFlightPage', () => {
  let component: AddFlightPage;
  let fixture: ComponentFixture<AddFlightPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
