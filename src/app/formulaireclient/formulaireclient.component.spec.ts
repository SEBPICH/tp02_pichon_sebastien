import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoormulaireclientComponent } from './formulaireclient.component';

describe('FormulaireclientComponent', () => {
  let component: FoormulaireclientComponent;
  let fixture: ComponentFixture<FoormulaireclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoormulaireclientComponent]
    });
    fixture = TestBed.createComponent(FoormulaireclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
