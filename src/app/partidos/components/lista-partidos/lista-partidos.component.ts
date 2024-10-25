import { Component, OnInit } from '@angular/core';
import { PartidoService } from '../../partido.service';
import { EquipoService } from '../../../equipos/equipo.service';
import Swal from 'sweetalert2';  

@Component({
  selector: 'app-lista-partidos',
  templateUrl: './lista-partidos.component.html',
  styleUrls: ['./lista-partidos.component.css']
})
export class ListaPartidosComponent implements OnInit {
  partidos: any[] = [];
  equipos: string[] = []; 

  constructor(
    private partidoService: PartidoService,
    private equipoService: EquipoService
  ) {}

  ngOnInit() {
    this.cargarPartidos();
    this.cargarEquipos();
  }

  cargarPartidos() {
    this.partidos = this.partidoService.getPartidos();
  }

  cargarEquipos() {
    this.equipoService.getEquipos().subscribe((equipos) => {
      this.equipos = equipos.map((equipo) => equipo.nombre);
    });
  }

  onPartidoAgregado(partido: any) { 
    this.partidos.push(partido); 
    this.partidoService.agregarPartido(partido); 
    Swal.fire('¡Éxito!', 'El partido ha sido agregado correctamente.', 'success');
  }

  editarPartido(index: number) {
    this.partidos[index].editMode = true; 
  }

  guardarPartido(index: number) {
    this.partidos[index].editMode = false; 
    this.partidoService.actualizarPartido(this.partidos[index], index); 
    
    Swal.fire('¡Guardado!', 'Los cambios han sido guardados exitosamente.', 'success');
  }

  eliminarPartido(index: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esta acción.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.partidoService.eliminarPartido(index);
        this.cargarPartidos(); 
        Swal.fire('¡Eliminado!', 'El partido ha sido eliminado.', 'success');
      }
    });
  }
}
