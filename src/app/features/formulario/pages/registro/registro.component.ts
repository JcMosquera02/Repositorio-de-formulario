import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../services/validators.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  formulario: FormGroup;
  datosEnviados: any = null;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      usuario: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]+$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmarPassword: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(15), Validators.max(90)]],
      terminos: [false, Validators.requiredTrue]
    }, {
      validators: passwordMatchValidator
    });
  }

  enviar() {
    if (this.formulario.invalid) return;
    this.datosEnviados = { ...this.formulario.value };
    delete this.datosEnviados.password;
    delete this.datosEnviados.confirmarPassword;
  }
}