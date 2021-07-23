import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintwoComponent } from './admintwo.component';

describe('AdmintwoComponent', () => {
  let component: AdmintwoComponent;
  let fixture: ComponentFixture<AdmintwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmintwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
