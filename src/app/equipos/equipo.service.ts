import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Equipo {
  id: number;
  nombre: string;
  ciudad: string;
  fundacion: string;
  entrenador: string;
}

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private equipos: Equipo[] = [];

  constructor() {
    this.cargarEquiposDesdeLocalStorage();
  }

  private cargarEquiposDesdeLocalStorage(): void {
    const equiposGuardados = localStorage.getItem('equipos');
    if (equiposGuardados) {
      this.equipos = JSON.parse(equiposGuardados);
    }
  }

  getEquipos(): Observable<Equipo[]> {
    return of(this.equipos); 
  }

  agregarEquipo(equipo: Equipo): void {
    equipo.id = this.equipos.length > 0 ? this.equipos[this.equipos.length - 1].id + 1 : 1;
    this.equipos.push(equipo);
    localStorage.setItem('equipos', JSON.stringify(this.equipos));
  }

  eliminarEquipo(id: number): void {
    this.equipos = this.equipos.filter(e => e.id !== id);
    localStorage.setItem('equipos', JSON.stringify(this.equipos));
  }

  actualizarEquipo(equipoEditado: Equipo): void {
    const index = this.equipos.findIndex(e => e.id === equipoEditado.id);
    if (index !== -1) {
      this.equipos[index] = equipoEditado;
      localStorage.setItem('equipos', JSON.stringify(this.equipos));
    }
  }
}
