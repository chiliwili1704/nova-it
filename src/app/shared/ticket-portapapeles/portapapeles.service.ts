import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PortapapelesService {
  constructor() { }
  copiarTextoAlPortapapeles(texto: string): void {
    const elementoTemporal = document.createElement('textarea');
    elementoTemporal.value = texto;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand('copy');
    document.body.removeChild(elementoTemporal);
  }
}
