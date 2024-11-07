import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Equipo {
  id: number;
  nombre: string;
  ciudad: string;
  anioFundacion: string;
  entrenador: string;
}

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private apiUrl = 'http://localhost:3000/api/equipos'; 

  constructor(private http: HttpClient) {}

  getEquipos(): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(this.apiUrl);
  }

  agregarEquipo(equipo: Equipo): Observable<Equipo> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
  });
  return this.http.post<Equipo>(this.apiUrl, equipo, { headers });
  }

  eliminarEquipo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  actualizarEquipo(equipo: Equipo): Observable<Equipo> {
    return this.http.put<Equipo>(`${this.apiUrl}/${equipo.id}`, equipo);
  }
}
