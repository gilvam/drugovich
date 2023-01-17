import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Client } from '../_shared/models/client.model';
import { ClientStatusEnum } from '../_shared/models/client-status.enum';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent {
  imgFolder = 'assets/images/icons/user.png';
  iconPlus = faPlus;

  clientList: Client[] = [
    {
      id: 1,
      name: 'Auto-Peças Joaquim LTDA.',
      cnpj: '000000000000000',
      status: ClientStatusEnum.INACTIVE,
    },
    {
      id: 2,
      name: 'Auto-Peças Carlinhos LTDA.',
      cnpj: '000000000000000',
      status: ClientStatusEnum.ACTIVE,
    },
    {
      id: 3,
      name: 'Auto-Peças João LTDA.',
      cnpj: '000000000000000',
      status: ClientStatusEnum.ACTIVE,
    },
    {
      id: 4,
      name: 'Auto-Peças Maria LTDA.',
      cnpj: '000000000000000',
      status: ClientStatusEnum.ACTIVE,
    },
  ];

  constructor() {}

  statusToBoolean(status: ClientStatusEnum): boolean {
    return status === ClientStatusEnum.ACTIVE;
  }
}
