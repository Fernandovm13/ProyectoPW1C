import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEquiposComponent } from './components/lista-equipos/lista-equipos.component';
import { FormularioEquipoComponent } from './components/formulario-equipo/formulario-equipo.component';

const routes: Routes = [
  { path: 'lista', component: ListaEquiposComponent },
  { path: 'nuevo', component: FormularioEquipoComponent },
  { path: '', redirectTo: 'lista', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquiposRoutingModule {}
