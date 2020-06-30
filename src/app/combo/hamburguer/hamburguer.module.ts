import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HamburguerComponent } from './hamburguer.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  declarations: [HamburguerComponent],
  exports: [HamburguerComponent],
})
export class HamburguerModule {}
