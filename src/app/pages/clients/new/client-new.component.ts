import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ValidatorsCustom } from '../../../core/validators/validators-custom';
import { FormErrorService } from '../../../core/services/form-error.service';
import { ApiClientService } from '../_shared/services/api/api-client.service';
import { ClientStatusEnum } from '../_shared/models/client-status.enum';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Client } from '../_shared/models/client.model';

@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  styleUrls: ['./client-new.component.scss'],
})
export class ClientNewComponent {
  imgFolder = 'assets/images/icons/user.png';
  form = this.fb.group({
    id: [null],
    name: ['', [Validators.required]],
    cnpj: ['', [Validators.required, ValidatorsCustom.cnpj]],
    status: [ClientStatusEnum.ACTIVE, [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formErrorService: FormErrorService,
    private apiClientService: ApiClientService,
    private snackBar: MatSnackBar
  ) {}

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    const client = this.form.value;
    this.apiClientService
      .set(new Client(client.id, client.name, client.cnpj, client.status))
      .subscribe(() => {
        this.snackBar.open('Cliente adicionado', '', { duration: 2000 });
        this.router.navigate(['clients']);
      });
  }

  formError(control: FormControl): string {
    return control.touched ? this.formErrorService.getMessage(control) : '';
  }

  isInvalid(control: FormControl): boolean {
    return control.touched && control.invalid;
  }
}
