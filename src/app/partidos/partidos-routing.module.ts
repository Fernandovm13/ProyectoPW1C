import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPartidosComponent } from './components/lista-partidos/lista-partidos.component';

const routes: Routes = [
  { path: '', component: ListaPartidosComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidosRoutingModule { }
