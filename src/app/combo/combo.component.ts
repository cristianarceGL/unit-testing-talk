import { Component, OnInit } from '@angular/core';

export enum ComboOptions {
  Small = 'small combo',
  Regular = 'regular combo with fries',
  Large = 'large combo fries and soda'
}

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.scss']
})
export class ComboComponent implements OnInit {

  public selectedCombo:ComboOptions;
  public selectedComboPrice:number;
  public isToGo = false;

  constructor() { }

  ngOnInit(): void {
  }

  public setDeliveryToGo(isToGo: boolean): void{
    this.isToGo = isToGo;
  }

  public setComboOption(value: ComboOptions): void {
    switch (value) {
      case ComboOptions.Small:
        this.selectedComboPrice = 12.95;
        break;
      case ComboOptions.Regular:
        this.selectedComboPrice = 27.95;
        break;
      case ComboOptions.Large:
        this.selectedComboPrice = 32.95;
        break;
    }
  }

}
