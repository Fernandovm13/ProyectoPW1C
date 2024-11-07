import { Component, OnInit } from '@angular/core';
import { Jugador, JugadorService } from '../../jugador.service';
import { EquipoService, Equipo } from '../../../equipos/equipo.service';
import Swal from 'sweetalert2';  

@Component({
  selector: 'app-lista-jugadores',
  templateUrl: './lista-jugadores.component.html',
  styleUrls: ['./lista-jugadores.component.css']
})
export class ListaJugadoresComponent implements OnInit {
  jugadores: Jugador[] = [];
  jugadorEditado: Jugador | null = null;
  equipos: Equipo[] = [];
  posiciones: string[] = ['PO', 'DEF', 'MD', 'DEL'];

  constructor(
    private jugadorService: JugadorService,
    private equipoService: EquipoService
  ) {}

  ngOnInit(): void {
    this.cargarJugadores();
    this.cargarEquipos();
    
  }

  cargarJugadores(): void {
   
    this.jugadorService.getJugadores().subscribe(data => {
      this.jugadores = data;
    });
  }

  cargarEquipos(): void {
    this.equipoService.getEquipos().subscribe((equipos: Equipo[]) => {
      this.equipos = equipos;
    });
  }

  eliminarJugador(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esta acción.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.jugadorService.eliminarJugador(id);
        this.cargarJugadores();
        Swal.fire('¡Eliminado!', 'El jugador ha sido eliminado.', 'success');
      }
    });
  }

  editarJugador(jugador: Jugador): void {
    this.jugadorEditado = { ...jugador };
  }

  guardarEdicion(): void {
    if (this.jugadorEditado) {
      this.jugadorService.actualizarJugador(this.jugadorEditado);
      this.cargarJugadores();
      this.jugadorEditado = null;
      Swal.fire('¡Actualizado!', 'El jugador ha sido actualizado correctamente.', 'success');
    }
  }
}
