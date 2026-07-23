import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './pages/registro/registro.component';
import { ResumenComponent } from './pages/resumen/resumen.component';

@NgModule({
  declarations: [
    RegistroComponent,
    ResumenComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FormularioModule { }