import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status.component';
import { StatusTypeDirective } from './_shared/directives/status-type.directive';

@NgModule({
  declarations: [StatusComponent, StatusTypeDirective],
  exports: [StatusComponent],
  imports: [CommonModule],
})
export class StatusModule {}
