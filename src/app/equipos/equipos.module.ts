import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaEquiposComponent } from './components/lista-equipos/lista-equipos.component';
import { FormularioEquipoComponent } from './components/formulario-equipo/formulario-equipo.component';
import { EquiposRoutingModule } from './equipos-routing.module';
import { JugadoresModule } from '../jugadores/jugadores.module'; 
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    ListaEquiposComponent,
    FormularioEquipoComponent
  ],
  imports: [
    CommonModule,
    EquiposRoutingModule,
    JugadoresModule, 
    FormsModule 
  ]
})
export class EquiposModule {}
