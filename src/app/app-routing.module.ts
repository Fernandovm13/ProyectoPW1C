import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ListaEquiposComponent } from './equipos/components/lista-equipos/lista-equipos.component'; 
import { ListaJugadoresComponent } from './jugadores/components/lista-jugadores/lista-jugadores.component'; 
import { ListaPartidosComponent } from './partidos/components/lista-partidos/lista-partidos.component'; 

const routes: Routes = [
  { path: '', component: HomePageComponent }, 
  { path: 'equipos', component: ListaEquiposComponent }, 
  { path: 'jugadores', component: ListaJugadoresComponent }, 
  { path: 'partidos', component: ListaPartidosComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
