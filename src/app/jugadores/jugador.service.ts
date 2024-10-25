import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Jugador {
  id: number;
  nombre: string;
  edad: string;
  posicion: string;
  numero: string;
  equipo: string;
}

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  private jugadoresKey = 'jugadores'; 

  getJugadores(): Observable<Jugador[]> {
    const jugadores = JSON.parse(localStorage.getItem(this.jugadoresKey) || '[]');
    return of(jugadores);
  }

  agregarJugador(jugador: Jugador): void {
    const jugadores = JSON.parse(localStorage.getItem(this.jugadoresKey) || '[]');
    jugador.id = jugadores.length ? jugadores[jugadores.length - 1].id + 1 : 1;
    jugadores.push(jugador);
    localStorage.setItem(this.jugadoresKey, JSON.stringify(jugadores));
  }

  eliminarJugador(id: number): void {
    let jugadores = JSON.parse(localStorage.getItem(this.jugadoresKey) || '[]');
    jugadores = jugadores.filter((j: Jugador) => j.id !== id);
    localStorage.setItem(this.jugadoresKey, JSON.stringify(jugadores));
  }

  actualizarJugador(jugadorActualizado: Jugador): void {
    let jugadores = JSON.parse(localStorage.getItem(this.jugadoresKey) || '[]');
    const indice = jugadores.findIndex((j: Jugador) => j.id === jugadorActualizado.id);
    if (indice !== -1) {
      jugadores[indice] = jugadorActualizado;  // Actualizar jugador
      localStorage.setItem(this.jugadoresKey, JSON.stringify(jugadores));
    }
  }

  getJugadoresPorEquipo(equipo: string): Observable<Jugador[]> {
    const jugadores = JSON.parse(localStorage.getItem(this.jugadoresKey) || '[]');
    const jugadoresDelEquipo = jugadores.filter((j: Jugador) => j.equipo === equipo);
    return of(jugadoresDelEquipo); 
  }
}
