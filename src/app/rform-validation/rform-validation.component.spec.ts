import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RformValidationComponent } from './rform-validation.component';

describe('RformValidationComponent', () => {
  let component: RformValidationComponent;
  let fixture: ComponentFixture<RformValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RformValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RformValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
