import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockCellComponent } from './clock-cell.component';

describe('ClockCellComponent', () => {
  let component: ClockCellComponent;
  let fixture: ComponentFixture<ClockCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
