import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Client } from '../_shared/models/client.model';
import { ClientStatusEnum } from '../_shared/models/client-status.enum';
import { Router } from '@angular/router';
import { ApiClientService } from '../_shared/services/api/api-client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {
  imgFolder = 'assets/images/icons/user.png';
  iconPlus = faPlus;
  $clientList: Observable<Client[]> = new Observable();

  constructor(
    private router: Router,
    private apiClientService: ApiClientService
  ) {}

  ngOnInit(): void {
    this.$clientList = this.apiClientService.getAll();
  }

  statusToBoolean(status: ClientStatusEnum): boolean {
    return status === ClientStatusEnum.ACTIVE;
  }

  goToNew(): void {
    this.router.navigate(['clients/new']);
  }
}
