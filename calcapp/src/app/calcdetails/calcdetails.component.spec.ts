import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcdetailsComponent } from './calcdetails.component';

describe('CalcdetailsComponent', () => {
  let component: CalcdetailsComponent;
  let fixture: ComponentFixture<CalcdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
