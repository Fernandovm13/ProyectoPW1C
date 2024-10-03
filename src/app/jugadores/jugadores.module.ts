import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaJugadoresComponent } from './components/lista-jugadores/lista-jugadores.component';
import { FormularioJugadorComponent } from './components/formulario-jugador/formulario-jugador.component';
import { JugadoresRoutingModule } from './jugadores-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListaJugadoresComponent,
    FormularioJugadorComponent
  ],
  imports: [
    CommonModule,
    JugadoresRoutingModule,
    FormsModule
  ],
  exports: [  
    ListaJugadoresComponent,
    FormularioJugadorComponent
  ]
})
export class JugadoresModule {}
