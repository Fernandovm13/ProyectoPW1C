import { Component, OnInit } from '@angular/core';
import { JugadorService, Jugador } from '../../jugador.service';
import { EquipoService, Equipo } from '../../../equipos/equipo.service'; 

@Component({
  selector: 'app-formulario-jugador',
  templateUrl: './formulario-jugador.component.html',
  styleUrls: ['./formulario-jugador.component.css']
})
export class FormularioJugadorComponent implements OnInit {
  nuevoJugador: Jugador = {
    id: 0,
    nombre: '',
    edad: '',
    posicion: '',
    numero: '',
    equipo: ''
  };
  
  equipos: Equipo[] = []; 
  posiciones: string[] = ['PO', 'DEF', 'MD', 'DEL'];

  constructor(
    private jugadorService: JugadorService,
    private equipoService: EquipoService 
  ) {}

  ngOnInit(): void {
    this.cargarEquipos(); 
  }

  cargarEquipos(): void {
    this.equipoService.getEquipos().subscribe((equipos: Equipo[]) => { 
      this.equipos = equipos; 
    });
  }

  agregarJugador(): void {
    this.jugadorService.agregarJugador(this.nuevoJugador);
    this.nuevoJugador = {
      id: 0,
      nombre: '',
      edad: '',
      posicion: '',
      numero: '',
      equipo: ''
    }; 
  }
}
