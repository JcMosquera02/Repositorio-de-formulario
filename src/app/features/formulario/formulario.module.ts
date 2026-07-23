import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './pages/registro/registro.component';
import { ResumenComponent } from './pages/resumen/resumen.component';



@NgModule({
  declarations: [
    RegistroComponent,
    ResumenComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormularioModule { }
