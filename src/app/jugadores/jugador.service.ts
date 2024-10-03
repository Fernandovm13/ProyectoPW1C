import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Jugador {
  id: number;
  nombre: string;
  edad: string;
  posicion: string;
  numero: string;
  equipo: string; // Asociación con el equipo
}

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  private jugadoresKey = 'jugadores'; // Clave para el local storage

  getJugadores(): Observable<Jugador[]> {
    const jugadores = JSON.parse(localStorage.getItem(this.jugadoresKey) || '[]');
    return of(jugadores);
  }

  agregarJugador(jugador: Jugador): void {
    const jugadores = JSON.parse(localStorage.getItem(this.jugadoresKey) || '[]');
    jugador.id = jugadores.length ? jugadores[jugadores.length - 1].id + 1 : 1; // Asignar nuevo ID
    jugadores.push(jugador);
    localStorage.setItem(this.jugadoresKey, JSON.stringify(jugadores));
  }

  eliminarJugador(id: number): void {
    let jugadores = JSON.parse(localStorage.getItem(this.jugadoresKey) || '[]');
    jugadores = jugadores.filter((j: Jugador) => j.id !== id);
    localStorage.setItem(this.jugadoresKey, JSON.stringify(jugadores));
  }

  // Nuevo método para obtener jugadores por equipo
  getJugadoresPorEquipo(equipo: string): Observable<Jugador[]> {
    const jugadores = JSON.parse(localStorage.getItem(this.jugadoresKey) || '[]');
    const jugadoresDelEquipo = jugadores.filter((j: Jugador) => j.equipo === equipo);
    return of(jugadoresDelEquipo); // Retorna solo los jugadores del equipo especificado
  }
}
