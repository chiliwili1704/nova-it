import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {URLTicket} from "@nova/api/url/URLTicket";
import {Seguimiento, Ticket} from "@nova/modelo";
import {DataPaginado} from "./data-paginado";
import {NovaResponse} from "@nova/api";

@Injectable({
   providedIn: 'root'
})
export class TicketService {
   private readonly header: HttpHeaders;

   constructor(private httpClient: HttpClient) {
      this.header = new HttpHeaders({'Content-Type': 'application/json'});
   }

   obtenerTickets(p: any) {
      return this.httpClient.get<NovaResponse<DataPaginado>>(URLTicket.tickets, {
         headers: this.header, params: p
      })
   }

   registrar(p) {
      return this.httpClient.post<NovaResponse<Ticket>>(URLTicket.nuevo, p, {headers: this.header})
   }

   obtenerHistorial(id_ticket) {
      return this.httpClient.get<NovaResponse<Array<Seguimiento>>>(URLTicket.historial, {
         headers: this.header, params: {id: id_ticket}
      })
   }

   obtenerDetalles(id) {
      return this.httpClient.get<NovaResponse<Ticket>>(URLTicket.detalles, {
         headers: this.header, params: {id: id}
      })
   }

   agregarSeguimiento(s) {
      return this.httpClient.post<NovaResponse<Seguimiento>>(URLTicket.agregarSeguimiento, s, {headers: this.header})
   }
}