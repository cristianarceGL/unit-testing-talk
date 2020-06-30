import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HamburguerComponent } from './hamburguer/hamburguer.component';
import { FriesComponent } from './fries/fries.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  declarations: [HamburguerComponent, FriesComponent],
  exports: [HamburguerComponent, FriesComponent],
})
export class ComboModule {}
