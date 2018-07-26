import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeOfLifeComponent } from './tree-of-life.component';

describe('TreeOfLifeComponent', () => {
  let component: TreeOfLifeComponent;
  let fixture: ComponentFixture<TreeOfLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeOfLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeOfLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
