import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSalesItemComponent } from './model-sales-item.component';

describe('ModelSalesItemComponent', () => {
  let component: ModelSalesItemComponent;
  let fixture: ComponentFixture<ModelSalesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelSalesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelSalesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
