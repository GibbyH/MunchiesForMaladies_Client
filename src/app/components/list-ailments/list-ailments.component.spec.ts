import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAilmentsComponent } from './list-ailments.component';

describe('ListAilmentsComponent', () => {
  let component: ListAilmentsComponent;
  let fixture: ComponentFixture<ListAilmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAilmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAilmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
