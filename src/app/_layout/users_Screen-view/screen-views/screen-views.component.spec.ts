import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenViewsComponent } from './screen-views.component';

describe('ScreenViewsComponent', () => {
  let component: ScreenViewsComponent;
  let fixture: ComponentFixture<ScreenViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
