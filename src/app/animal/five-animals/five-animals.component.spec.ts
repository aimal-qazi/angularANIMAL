import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveAnimalsComponent } from './five-animals.component';

describe('FiveAnimalsComponent', () => {
  let component: FiveAnimalsComponent;
  let fixture: ComponentFixture<FiveAnimalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiveAnimalsComponent]
    });
    fixture = TestBed.createComponent(FiveAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
