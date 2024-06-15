import {HttpClient, HttpHeaders} from "@angular/common/http";

import {of, tap} from "rxjs";
import {Unidad} from "@nova/modelo";
import {Injectable} from "@angular/core";
import {URLUnidad} from "@nova/api/url/URLUnidad";
import {NovaResponse} from "@nova/api";

@Injectable({
   providedIn: 'root'
})
export class UnidadService {
   private unidades!: NovaResponse<Unidad[]>;
   private readonly header: HttpHeaders;

   constructor(private httpClient: HttpClient) {
      this.header = new HttpHeaders({'Content-Type': 'application/json'});
   }

   obtenerUnidades() {
      return this.unidades ? of(this.unidades) : this.httpClient.get<NovaResponse<Unidad[]>>(URLUnidad.unidades, {headers: this.header})
         .pipe(tap(data => this.unidades = data));
   }

   obtenerGenerales(idUnidad: number) {
      return this.httpClient.get<NovaResponse<Unidad>>(URLUnidad.generales, {
         headers: this.header, params: {id_unidad: idUnidad}
      })
   }
}
