import { environment } from '../../../../../../../environments/environment';

export class ApiGeneric {
  private apiRest(api: string, endpointList: any[]): string {
    let endPoint = api;
    let params = '';

    endpointList.forEach((item) => {
      item = String(item);
      if (item[0] !== '/') {
        item = `/${item}`;
      }
      params += item;
    });

    if (endpointList) {
      if (environment.api.substring(environment.api.length - 1) === '/') {
        endPoint = environment.api.substring(0, environment.api.length - 1);
      }
      return endPoint + params;
    }

    return endPoint;
  }

  api(...endPoint: any[]): string {
    return this.apiRest(environment.api, endPoint);
  }
}
