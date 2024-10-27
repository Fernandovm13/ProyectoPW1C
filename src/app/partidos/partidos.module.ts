import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPartidosComponent } from './components/lista-partidos/lista-partidos.component';
import { FormularioPartidoComponent } from './components/formulario-partido/formulario-partido.component';
import { FormsModule } from '@angular/forms';
import { TablaGeneralModule } from '../tabla-general/tabla-general.module';

@NgModule({
  declarations: [
    ListaPartidosComponent,
    FormularioPartidoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TablaGeneralModule 
  ],
  exports: [
    ListaPartidosComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PartidosModule { }
