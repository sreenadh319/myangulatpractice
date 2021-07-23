import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminoneComponent } from './adminone.component';

describe('AdminoneComponent', () => {
  let component: AdminoneComponent;
  let fixture: ComponentFixture<AdminoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
