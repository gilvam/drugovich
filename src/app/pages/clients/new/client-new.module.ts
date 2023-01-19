import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientNewRoutingModule } from './client-new-routing.module';
import { ClientNewComponent } from './client-new.component';
import { SubHeaderModule } from '../../_shared/components/sub-header/sub-header.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [ClientNewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClientNewRoutingModule,
    SubHeaderModule,
    NgxMaskDirective,
    MatSnackBarModule,
  ],
})
export class ClientNewModule {}
