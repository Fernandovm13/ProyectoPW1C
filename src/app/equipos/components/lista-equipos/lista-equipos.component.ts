import { Component, OnInit } from '@angular/core';
import { EquipoService, Equipo } from '../../equipo.service';
import { JugadorService, Jugador } from '../../../jugadores/jugador.service';
import Swal from 'sweetalert2';  

@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.css']
})
export class ListaEquiposComponent implements OnInit {
  equipos: Equipo[] = [];
  equipoEnEdicion: Equipo | null = null;

  constructor(
    private equipoService: EquipoService,
    private jugadorService: JugadorService
  ) {}

  ngOnInit(): void {
    this.cargarEquipos();
  }

  cargarEquipos(): void {
    this.equipoService.getEquipos().subscribe(
      equipos => {
        this.equipos = equipos;
      },
      error => {
        Swal.fire('Error', 'No se pudieron cargar los equipos.', 'error');
      }
    );
  }

  agregarEquipo(equipo: Equipo): void {
    this.equipoService.agregarEquipo(equipo).subscribe(
      () => {
        this.cargarEquipos();
        Swal.fire('¡Agregado!', 'El equipo ha sido agregado exitosamente.', 'success');
      },
      error => {
        Swal.fire('Error', 'No se pudo agregar el equipo.', 'error');
      }
    );
  }

  editarEquipo(equipo: Equipo): void {
    this.equipoEnEdicion = { ...equipo };
  }

  guardarEdicion(): void {
    if (this.equipoEnEdicion) {
      this.equipoService.actualizarEquipo(this.equipoEnEdicion).subscribe(
        () => {
          this.cargarEquipos();
          this.equipoEnEdicion = null;
          Swal.fire('¡Actualizado!', 'El equipo ha sido editado correctamente.', 'success');
        },
        error => {
          Swal.fire('Error', 'No se pudo actualizar el equipo.', 'error');
        }
      );
    }
  }

  cancelarEdicion(): void {
    this.equipoEnEdicion = null;
  }

  eliminarEquipo(id: number): void {
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
        this.equipoService.eliminarEquipo(id).subscribe(
          () => {
            this.cargarEquipos();
            Swal.fire('¡Eliminado!', 'El equipo ha sido eliminado.', 'success');
          },
          error => {
            Swal.fire('Error', 'No se pudo eliminar el equipo.', 'error');
          }
        );
      }
    });
  }
}
