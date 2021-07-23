import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchsampleComponent } from './switchsample.component';

describe('SwitchsampleComponent', () => {
  let component: SwitchsampleComponent;
  let fixture: ComponentFixture<SwitchsampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchsampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
