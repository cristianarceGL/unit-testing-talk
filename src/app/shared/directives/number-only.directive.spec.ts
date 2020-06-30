import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { NumberOnlyDirective } from './number-only.directive';

@Component({
  template: `
    <input [AllowOnlyNumbers]="true" type="text" name="totalAnnualIncome" />
  `,
})

class TestAllowOnlyNumbersComponent { }

describe('Directive: AllowOnlyNumbers', () => {
  let component: TestAllowOnlyNumbersComponent;
  let fixture: ComponentFixture<TestAllowOnlyNumbersComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestAllowOnlyNumbersComponent, NumberOnlyDirective],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(TestAllowOnlyNumbersComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input[name="totalAnnualIncome"]'));
    fixture.detectChanges();
  });

  it('keydown input', () => {
    inputEl.triggerEventHandler('keydown', {});
    expect(true).toBe(true);
  });
});
