// home.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { PartidosModule } from '../partidos/partidos.module'; // Asegúrate de importar el módulo de partidos

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    PartidosModule // Agrega esto para que puedas usar el componente de la tabla
  ]
})
export class HomeModule { }
