import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { CnpjUtil } from '../utils/cnpj.util';

export class ValidatorsCustom extends Validators {
  static cnpj(control: AbstractControl): ValidationErrors | null {
    const isValid = CnpjUtil.validate(control.value);
    if (isValid) {
      return {};
    }
    return { cnpjInvalid: 'Cnpj Inválido' };
  }
}
