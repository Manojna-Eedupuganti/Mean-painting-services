import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionformComponent } from './inspectionform.component';

describe('InspectionformComponent', () => {
  let component: InspectionformComponent;
  let fixture: ComponentFixture<InspectionformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InspectionformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InspectionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
