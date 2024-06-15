import {URLBase} from "./URLBase";

export class URLTicket extends URLBase {
   static readonly tickets = URLTicket.baseUrl + "/ticket/tickets"
   static readonly nuevo = URLTicket.baseUrl + "/ticket/nuevo"
   static detalles = URLTicket.baseUrl + "/ticket/detalles"
   static historial = URLTicket.baseUrl + "/ticket/historial";
   static agregarSeguimiento = URLTicket.baseUrl + "/ticket/seguimiento";
}