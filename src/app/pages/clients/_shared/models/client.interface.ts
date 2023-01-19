import { ClientStatusEnum } from './client-status.enum';

export interface IClient {
  id: number | null;
  name: string;
  cnpj: string;
  status: ClientStatusEnum;
}
