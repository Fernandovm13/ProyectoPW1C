import { Component } from '@angular/core';
import { Equipo, EquipoService } from '../../equipo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-equipo',
  templateUrl: './formulario-equipo.component.html',
  styleUrls: ['./formulario-equipo.component.css']
})
export class FormularioEquipoComponent {
  nuevoEquipo: Equipo = { id: 0, nombre: '', ciudad: '', fundacion: '', entrenador: '' };

  constructor(private equipoService: EquipoService) {}

  agregarEquipo(form: NgForm) {
    if (form.valid) {
      this.equipoService.agregarEquipo(this.nuevoEquipo);
      form.reset();
    }
  }
}
