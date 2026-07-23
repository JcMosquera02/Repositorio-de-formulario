import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmarPassword = control.get('confirmarPassword')?.value;

  if (password && confirmarPassword && password !== confirmarPassword) {
    return { passwordMismatch: true };
  }
  return null;
};