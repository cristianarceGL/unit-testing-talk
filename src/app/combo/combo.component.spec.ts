import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboComponent, ComboOptions } from './combo.component';
import { Component, ViewChild } from '@angular/core';

describe('ComboComponent', () => {
  let component: ComboWrapper;
  let fixture: ComponentFixture<ComboWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboComponent, ComboWrapper ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the delivery option', () => {
    component.comboComponent.setDeliveryToGo(true);
    expect(component.comboComponent.isToGo).toEqual(true);
  });

  it('should set the combo price option', () => {
    component.comboComponent.setComboOption(ComboOptions.Small);
    expect(component.comboComponent.selectedComboPrice).toEqual(12.95);

    component.comboComponent.setComboOption(ComboOptions.Regular);
    expect(component.comboComponent.selectedComboPrice).toEqual(27.95);

    component.comboComponent.setComboOption(ComboOptions.Large);
    expect(component.comboComponent.selectedComboPrice).toEqual(32.95);
  });

  @Component({
    selector: `sc-component`,
    template: `
      <app-combo></app-combo>
    `,
  })
  class ComboWrapper {
    @ViewChild(ComboComponent, { static: true })
    public comboComponent: ComboComponent;
  }
});
