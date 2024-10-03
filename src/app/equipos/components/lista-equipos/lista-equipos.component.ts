import { Component, OnInit } from '@angular/core';
import { EquipoService, Equipo } from '../../equipo.service';
import { JugadorService, Jugador } from '../../../jugadores/jugador.service';

@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.css']
})
export class ListaEquiposComponent implements OnInit {
  equipos: Equipo[] = [];
  jugadoresDelEquipo: Jugador[] = [];
  equipoSeleccionado: string = '';

  constructor(
    private equipoService: EquipoService,
    private jugadorService: JugadorService
  ) {}

  ngOnInit(): void {
    this.cargarEquipos();
  }

  cargarEquipos(): void {
    this.equipoService.getEquipos().subscribe(equipos => {
      this.equipos = equipos;
    });
  }

  verJugadores(equipo: Equipo): void {
    this.equipoSeleccionado = equipo.nombre;
    this.jugadorService.getJugadoresPorEquipo(equipo.nombre).subscribe((jugadores: Jugador[]) => {
      this.jugadoresDelEquipo = jugadores;
    });
  }

  editarEquipo(equipo: Equipo): void {
    console.log('Editar equipo:', equipo);
  }
}
