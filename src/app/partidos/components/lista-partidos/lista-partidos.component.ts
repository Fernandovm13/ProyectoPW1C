import { Component, OnInit } from '@angular/core';
import { PartidoService } from '../../partido.service';

@Component({
  selector: 'app-lista-partidos',
  templateUrl: './lista-partidos.component.html',
  styleUrls: ['./lista-partidos.component.css']
})
export class ListaPartidosComponent implements OnInit {
  partidos: any[] = [];

  constructor(private partidoService: PartidoService) {}

  ngOnInit() {
    this.cargarPartidos();
  }

  cargarPartidos() {
    this.partidos = this.partidoService.getPartidos(); 
  }

  onPartidoAgregado(partido: any) {
    this.partidos.push(partido); 
  }
}
