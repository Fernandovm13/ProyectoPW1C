import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPartidosComponent } from './components/lista-partidos/lista-partidos.component';
import { FormularioPartidoComponent } from './components/formulario-partido/formulario-partido.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListaPartidosComponent,
    FormularioPartidoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule 
  ],
  exports: [
    ListaPartidosComponent,
  ]
})
export class PartidosModule { }
