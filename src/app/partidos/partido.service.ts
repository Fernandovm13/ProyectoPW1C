import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PartidoService {
  private localStorageKey = 'partidos';

  constructor() {
    this.initializePartidos();
  }

  private initializePartidos() {
    if (!localStorage.getItem(this.localStorageKey)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }
  }

  agregarPartido(partido: any) {
    const partidos = this.getPartidos();
    partidos.push(partido);
    localStorage.setItem(this.localStorageKey, JSON.stringify(partidos));
  }

  getPartidos() {
    return JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
  }

  actualizarPartido(partido: any, index: number) {
    const partidos = this.getPartidos();
    partidos[index] = partido;
    localStorage.setItem(this.localStorageKey, JSON.stringify(partidos));
  }

  eliminarPartido(index: number) {
    const partidos = this.getPartidos();
    partidos.splice(index, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(partidos));
  }
}
