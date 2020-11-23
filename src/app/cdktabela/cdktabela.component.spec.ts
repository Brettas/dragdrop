import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdktabelaComponent } from './cdktabela.component';

describe('CdktabelaComponent', () => {
  let component: CdktabelaComponent;
  let fixture: ComponentFixture<CdktabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdktabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdktabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
