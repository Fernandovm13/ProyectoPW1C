import { Component, OnInit } from '@angular/core';
import { JugadorService, Jugador } from '../../jugador.service';
import { EquipoService, Equipo } from '../../../equipos/equipo.service'; // Importar EquipoService y Equipo

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
  
  equipos: Equipo[] = []; // Variable para almacenar los equipos
  posiciones: string[] = ['PO', 'DEF', 'MD', 'DEL'];

  constructor(
    private jugadorService: JugadorService,
    private equipoService: EquipoService // Inyectar EquipoService
  ) {}

  ngOnInit(): void {
    this.cargarEquipos(); // Cargar los equipos al iniciar el componente
  }

  cargarEquipos(): void {
    this.equipoService.getEquipos().subscribe((equipos: Equipo[]) => { // Usar EquipoService
      this.equipos = equipos; // Asignar los equipos a la propiedad
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
    }; // Reiniciar el formulario después de agregar el jugador
  }
}
