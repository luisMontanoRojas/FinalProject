import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSalesComponent } from './model-sales.component';

describe('ModelSalesComponent', () => {
  let component: ModelSalesComponent;
  let fixture: ComponentFixture<ModelSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
