import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresesComponent } from './intereses.component';

describe('InteresesComponent', () => {
  let component: InteresesComponent;
  let fixture: ComponentFixture<InteresesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InteresesComponent]
    });
    fixture = TestBed.createComponent(InteresesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
