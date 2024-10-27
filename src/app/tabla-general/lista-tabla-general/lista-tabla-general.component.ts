import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PartidoService } from '../../partidos/partido.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-lista-tabla-general',
  templateUrl: './lista-tabla-general.component.html',
  styleUrls: ['./lista-tabla-general.component.css']
})
export class ListaTablaGeneralComponent implements OnInit {
  tablaGeneral: any[] = [];
  mostrarTablaGeneral: boolean = false;

  @ViewChild('tablaGeneralPDF', { static: false }) tablaGeneralPDF!: ElementRef;

  constructor(private partidoService: PartidoService) {}

  ngOnInit(): void {
    this.generarTablaGeneral();
  }

  generarTablaGeneral() {
    this.tablaGeneral = this.partidoService.calcularTablaGeneral();
  }

  generarPDF() {
    const DATA = this.tablaGeneralPDF.nativeElement;
    html2canvas(DATA).then(canvas => {
      const fileWidth = 208;
      const fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      const PDF = new jsPDF('p', 'mm', 'a4');
      const position = 10;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Tabla-General.pdf');
    });
  }
}
