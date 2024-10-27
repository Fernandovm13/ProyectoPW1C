import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTablaGeneralComponent } from '../tabla-general/lista-tabla-general/lista-tabla-general.component';

@NgModule({
  declarations: [
    ListaTablaGeneralComponent 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaTablaGeneralComponent
  ]
})
export class TablaGeneralModule { }
