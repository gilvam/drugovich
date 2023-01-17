import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientListRoutingModule } from './client-list-routing.module';
import { ClientListComponent } from './client-list.component';
import { SubHeaderModule } from '../../_shared/components/sub-header/sub-header.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatusModule } from '../../_shared/components/status/status.module';

@NgModule({
  declarations: [ClientListComponent],
  imports: [
    CommonModule,
    ClientListRoutingModule,
    SubHeaderModule,
    FontAwesomeModule,
    StatusModule,
  ],
})
export class ClientListModule {}
