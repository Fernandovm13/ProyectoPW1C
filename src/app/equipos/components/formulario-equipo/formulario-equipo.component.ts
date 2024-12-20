import { Component, Input } from '@angular/core';
import { Equipo, EquipoService } from '../../equipo.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';  

@Component({
  selector: 'app-formulario-equipo',
  templateUrl: './formulario-equipo.component.html',
  styleUrls: ['./formulario-equipo.component.css']
})
export class FormularioEquipoComponent {
  @Input() equipoEditar?: Equipo;
  nuevoEquipo: Equipo = { id: 0, nombre: '', ciudad: '', anioFundacion: '', entrenador: '' };
  editarModo: boolean = false;

  constructor(private equipoService: EquipoService) {}

  ngOnChanges(): void {
    if (this.equipoEditar) {
      this.nuevoEquipo = { ...this.equipoEditar };
      this.editarModo = true;
    }
  }

  agregarEquipo(form: NgForm): void {
    console.log(this.nuevoEquipo);
    const newTeam = { 
      id: this.nuevoEquipo.id, 
      nombre: this.nuevoEquipo.nombre, 
      ciudad: this.nuevoEquipo.ciudad, 
      anioFundacion: this.nuevoEquipo.anioFundacion, 
      entrenador: this.nuevoEquipo.entrenador 
    };
    console.log(newTeam);
    
    if (form.valid) {
      this.equipoService.agregarEquipo(newTeam).subscribe({
        next: (response) => {
          console.log(response)
        },
        error: (err) => {
        console.log(err);
        }});
      Swal.fire({
        title: '¡Equipo agregado!',
        text: 'El equipo ha sido agregado correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
      form.reset();
      this.editarModo = false;
    }
  }

  actualizarEquipo(form: NgForm): void {
    if (form.valid && this.equipoEditar) {
      this.equipoService.actualizarEquipo(this.nuevoEquipo);
      Swal.fire({
        title: '¡Equipo actualizado!',
        text: 'El equipo ha sido actualizado correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
      form.reset();
      this.editarModo = false;
    }
  }
}
