import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientListRoutingModule } from './client-list-routing.module';
import { ClientListComponent } from './client-list.component';
import { SubHeaderModule } from '../../_shared/components/sub-header/sub-header.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatusModule } from '../../_shared/components/status/status.module';
import { CnpjPipe } from '../../../core/pipes/cnpj.pipe';

@NgModule({
  declarations: [ClientListComponent, CnpjPipe],
  imports: [
    CommonModule,
    ClientListRoutingModule,
    SubHeaderModule,
    FontAwesomeModule,
    StatusModule,
  ],
  providers: [],
})
export class ClientListModule {}
