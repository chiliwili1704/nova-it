import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {of, tap} from "rxjs";
import {NovaResponse} from '@nova/api';
import {EstadoReporte} from "@nova/modelo";
import {URLEstadoReporte} from "@nova/api/url/URLEstadoReporte";

@Injectable({
   providedIn: 'root'
})
export class EstadoReporteService {
   private readonly header: HttpHeaders;
   private estados: NovaResponse<EstadoReporte[]>;

   constructor(private httpClient: HttpClient) {
      this.header = new HttpHeaders({'Content-Type': 'application/json'});
   }

   obtenerEstados() {
      return this.estados ? of(this.estados) : this.httpClient.get<NovaResponse<EstadoReporte[]>>(URLEstadoReporte.estados, {headers: this.header})
         .pipe(tap(data => this.estados = data));
   }

}
