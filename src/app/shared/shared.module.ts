import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberOnlyDirective } from './directives/number-only.directive';

const toExport = [CommonModule];

@NgModule({
  imports: [...toExport],
  declarations: [NumberOnlyDirective],
  exports: [...toExport, NumberOnlyDirective],
  providers: [],
})
export class SharedModule {}
