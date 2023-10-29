import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftsCardComponent } from './gifts-card.component';

describe('GiftsCardComponent', () => {
  let component: GiftsCardComponent;
  let fixture: ComponentFixture<GiftsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiftsCardComponent]
    });
    fixture = TestBed.createComponent(GiftsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
