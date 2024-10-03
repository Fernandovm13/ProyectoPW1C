import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaJugadoresComponent } from './components/lista-jugadores/lista-jugadores.component';
import { FormularioJugadorComponent } from './components/formulario-jugador/formulario-jugador.component';

const routes: Routes = [
  { path: 'lista', component: ListaJugadoresComponent },
  { path: 'nuevo', component: FormularioJugadorComponent },
  { path: '', redirectTo: 'lista', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JugadoresRoutingModule {}
