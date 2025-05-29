import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualStateComponent } from './actual-state.component';

describe('ActualStateComponent', () => {
  let component: ActualStateComponent;
  let fixture: ComponentFixture<ActualStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualStateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
