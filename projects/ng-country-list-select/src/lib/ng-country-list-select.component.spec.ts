import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCountryListSelectComponent } from './ng-country-list-select.component';

describe('NgCountryListSelectComponent', () => {
  let component: NgCountryListSelectComponent;
  let fixture: ComponentFixture<NgCountryListSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCountryListSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCountryListSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
