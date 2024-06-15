import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {of, tap} from "rxjs";
import {Area} from "@nova/modelo";
import {URLArea} from "@nova/api/url/URLArea";
import {NovaResponse} from '@nova/api';

@Injectable({
   providedIn: 'root'
})
export class AreaService {
   private readonly header: HttpHeaders;
   private areas: NovaResponse<Area[]>;
   private reportes: NovaResponse<Area[]>;

   constructor(private httpClient: HttpClient) {
      this.header = new HttpHeaders({'Content-Type': 'application/json'});
   }

   obtenerAreas() {
      return this.areas ? of(this.areas) : this.httpClient.get<NovaResponse<Area[]>>(URLArea.areas, {headers: this.header})
         .pipe(tap(data => this.areas = data));
   }

   obtenerAreaConReportes() {
      return this.reportes ? of(this.reportes) : this.httpClient.get<NovaResponse<Area[]>>(URLArea.reportes, {headers: this.header})
         .pipe(tap(data => this.reportes = data));
   }
}
