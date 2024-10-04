import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { PartidosModule } from '../partidos/partidos.module'; 

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    PartidosModule 
  ]
})
export class HomeModule { }
