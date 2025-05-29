import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSquareComponent } from './info-square.component';

describe('InfoSquareComponent', () => {
  let component: InfoSquareComponent;
  let fixture: ComponentFixture<InfoSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoSquareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
