import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburguerComponent } from './hamburguer.component';

describe('HamburguerComponent', () => {
  let component: HamburguerComponent;
  let fixture: ComponentFixture<HamburguerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamburguerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburguerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
