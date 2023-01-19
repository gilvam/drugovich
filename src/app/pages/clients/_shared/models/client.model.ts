import { ClientStatusEnum } from './client-status.enum';
import { IClient } from './client.interface';
import { StringUtil } from '../../../../core/utils/string.util';

export class Client implements IClient {
  id: number | null;
  name: string;
  cnpj: string;
  status: ClientStatusEnum;

  constructor(
    id: number | null = null,
    name: string | null = '',
    cnpj: string | null = '',
    status: ClientStatusEnum | null = ClientStatusEnum.ACTIVE
  ) {
    this.id = id;
    this.name = name || '';
    this.cnpj = StringUtil.onlyNumber(cnpj || '');
    this.status = status || ClientStatusEnum.ACTIVE;
  }
}
