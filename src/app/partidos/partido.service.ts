import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PartidoService {
  private partidos: any[] = [];

  constructor() {}

  getPartidos(): any[] {
    return JSON.parse(localStorage.getItem('partidos') || '[]');
  }

  agregarPartido(partido: any) {
    const partidos = this.getPartidos();
    partidos.push(partido);
    localStorage.setItem('partidos', JSON.stringify(partidos));
  }

  actualizarPartido(partido: any, index: number) {
    const partidos = this.getPartidos();
    partidos[index] = partido;
    localStorage.setItem('partidos', JSON.stringify(partidos));
  }

  eliminarPartido(index: number) {
    const partidos = this.getPartidos();
    partidos.splice(index, 1);
    localStorage.setItem('partidos', JSON.stringify(partidos));
  }

  calcularTablaGeneral() {
    const partidos = this.getPartidos();
    const tabla: { [equipo: string]: any } = {};

    partidos.forEach(partido => {
      const [golesLocal, golesVisitante] = partido.resultado.split('-').map(Number);
      const equipoLocal = partido.equipoLocal;
      const equipoVisitante = partido.equipoVisitante;

      if (!tabla[equipoLocal]) {
        tabla[equipoLocal] = { puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, golesFavor: 0, golesContra: 0 };
      }
      if (!tabla[equipoVisitante]) {
        tabla[equipoVisitante] = { puntos: 0, jugados: 0, ganados: 0, empatados: 0, perdidos: 0, golesFavor: 0, golesContra: 0 };
      }

      tabla[equipoLocal].jugados += 1;
      tabla[equipoVisitante].jugados += 1;
      tabla[equipoLocal].golesFavor += golesLocal;
      tabla[equipoLocal].golesContra += golesVisitante;
      tabla[equipoVisitante].golesFavor += golesVisitante;
      tabla[equipoVisitante].golesContra += golesLocal;

      if (golesLocal > golesVisitante) {
        tabla[equipoLocal].puntos += 3;
        tabla[equipoLocal].ganados += 1;
        tabla[equipoVisitante].perdidos += 1;
      } else if (golesLocal < golesVisitante) {
        tabla[equipoVisitante].puntos += 3;
        tabla[equipoVisitante].ganados += 1;
        tabla[equipoLocal].perdidos += 1;
      } else {
        tabla[equipoLocal].puntos += 1;
        tabla[equipoVisitante].puntos += 1;
        tabla[equipoLocal].empatados += 1;
        tabla[equipoVisitante].empatados += 1;
      }
    });

    return Object.entries(tabla).map(([equipo, stats]) => ({
      equipo,
      ...stats,
    })).sort((a, b) => b.puntos - a.puntos);
  }
}
