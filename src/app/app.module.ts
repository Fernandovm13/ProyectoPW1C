import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquiposModule } from './equipos/equipos.module'; 
import { PartidosModule } from './partidos/partidos.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EquiposModule,
    PartidosModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
