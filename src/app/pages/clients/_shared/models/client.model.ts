import { ClientStatusEnum } from './client-status.enum';

export class Client {
  id: number;
  name: string;
  cnpj: string;
  status: ClientStatusEnum;

  constructor(
    id: number,
    name: string,
    cnpj: string,
    status: ClientStatusEnum
  ) {
    this.id = id;
    this.name = name;
    this.cnpj = cnpj;
    this.status = status;
  }
}
