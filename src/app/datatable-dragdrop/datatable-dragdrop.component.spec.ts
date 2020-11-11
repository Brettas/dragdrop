import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableDragdropComponent } from './datatable-dragdrop.component';

describe('DatatableDragdropComponent', () => {
  let component: DatatableDragdropComponent;
  let fixture: ComponentFixture<DatatableDragdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableDragdropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableDragdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
