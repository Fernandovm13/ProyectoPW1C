import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../equipos/equipo.service';  
import { JugadorService } from '../../jugadores/jugador.service';  
import { PartidoService } from '../../partidos/partido.service'; 

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  totalEquipos: number = 0;
  totalJugadores: number = 0;
  totalPartidos: number = 0;
  partidos: any[] = [];

  constructor(
    private equipoService: EquipoService,
    private jugadorService: JugadorService,
    private partidoService: PartidoService
  ) { }

  ngOnInit(): void {
    this.equipoService.getEquipos().subscribe(equipos => {
      this.totalEquipos = equipos.length; 
    });

    this.jugadorService.getJugadores().subscribe(jugadores => {
      this.totalJugadores = jugadores.length; 
    });

    this.partidos = this.partidoService.getPartidos(); 
    this.totalPartidos = this.partidos.length;
  }
}
