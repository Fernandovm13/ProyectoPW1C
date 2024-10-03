import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquiposModule } from './equipos/equipos.module'; 
import { PartidosModule } from './partidos/partidos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EquiposModule,
    PartidosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
