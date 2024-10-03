import { Component, OnInit } from '@angular/core';
import { Jugador, JugadorService } from '../../jugador.service';

@Component({
  selector: 'app-lista-jugadores',
  templateUrl: './lista-jugadores.component.html',
  styleUrls: ['./lista-jugadores.component.css']
})
export class ListaJugadoresComponent implements OnInit {
  jugadores: Jugador[] = [];

  constructor(private jugadorService: JugadorService) {}

  ngOnInit(): void {
    this.cargarJugadores();
  }

  cargarJugadores(): void {
    this.jugadorService.getJugadores().subscribe(data => {
      this.jugadores = data;
    });
  }

  eliminarJugador(id: number): void {
    this.jugadorService.eliminarJugador(id);
    this.cargarJugadores(); 
  }
}
