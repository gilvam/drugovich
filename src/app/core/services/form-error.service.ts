import { Injectable } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FormErrorService {
  private defaultMessage = 'Campo inválido';

  private validationMessages = (key: string, paramError: any): string => {
    const messages: { [key: string]: string } = {
      required: `Campo requerido`,
      email: `Email inválido`,
      notEqual: `Confirmação diferente`,
      minlength: `O número mínimo de caracteres é ${paramError.requiredLength}`,
      maxlength: `O número máximo permitido de caracteres é ${paramError.requiredLength}`,
      max: `O valor máximo é ${paramError.max}`,
      min: `O valor mínimo é ${paramError.max}`,
      pattern: `Campo inválido`,

      // novos padroes de mensagem
      invalid: 'Campo inválido',
      invalidCharacters: `Caracterer '${paramError}' inválido`,
    };

    return messages[key] ? messages[key] : this.checkParam(paramError);
  };

  private checkParam(paramError: any): string {
    return typeof paramError === 'object' ? this.defaultMessage : paramError;
  }

  getMessage(formAny: FormControl | FormControlName): string {
    let messageLast = '';
    if (!formAny.errors) {
      return '';
    }
    Object.keys(formAny.errors).forEach((key) => {
      const messErr = this.validationMessages(key, formAny.getError(key));
      messageLast = messageLast ? `${messageLast}. ` : messageLast;
      messageLast += messErr;
    });
    return messageLast || this.defaultMessage;
  }
}
