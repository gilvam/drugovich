import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../../models/client.model';
import { ApiGeneric } from './generics/api-generic';
import { IClient } from '../../models/client.interface';

@Injectable({ providedIn: 'root' })
export class ApiClientService extends ApiGeneric {
  constructor(private httpClient: HttpClient) {
    super();
  }

  getAll(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.api('clients'));
  }

  set(client: IClient): Observable<Client> {
    return this.httpClient.post<Client>(this.api('clients'), client);
  }
}
