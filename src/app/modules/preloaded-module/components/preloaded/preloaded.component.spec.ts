import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloadedComponent } from './preloaded.component';

describe('PreloadedComponent', () => {
  let component: PreloadedComponent;
  let fixture: ComponentFixture<PreloadedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreloadedComponent]
    });
    fixture = TestBed.createComponent(PreloadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
