import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { PartidoService } from '../../partido.service'; 
import { EquipoService, Equipo } from '../../../equipos/equipo.service';

@Component({
  selector: 'app-formulario-partido',
  templateUrl: './formulario-partido.component.html',
  styleUrls: ['./formulario-partido.component.css']
})
export class FormularioPartidoComponent implements OnInit {
  @Output() partidoAgregado = new EventEmitter<any>(); 
  equipos: string[] = [];
  fecha: string = '';
  hora: string = '';
  equipoLocal: string = '';
  equipoVisitante: string = '';
  resultado: string = '';

  constructor(private partidoService: PartidoService, private equipoService: EquipoService) {}

  ngOnInit() {
    this.equipoService.getEquipos().subscribe((equipos: Equipo[]) => {
      this.equipos = equipos.map(equipo => equipo.nombre);
    });
  }

  agregarPartido() {
    const partido = {
      fecha: this.fecha,
      hora: this.hora,
      equipoLocal: this.equipoLocal,
      equipoVisitante: this.equipoVisitante,
      resultado: this.resultado
    };

    this.partidoService.agregarPartido(partido);
    this.partidoAgregado.emit(partido); // Emitir el evento con el nuevo partido
    this.limpiarFormulario();
  }

  limpiarFormulario() {
    this.fecha = '';
    this.hora = '';
    this.equipoLocal = '';
    this.equipoVisitante = '';
    this.resultado = '';
  }
}
