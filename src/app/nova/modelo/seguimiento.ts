import {EstadoReporte} from "./estado-reporte";
import {Ticket} from "./ticket";

export interface Seguimiento {
   id?: number;
   estado?: EstadoReporte;
   agente?: string;
   fecha?: string; // Assuming you'll convert LocalDateTime to string in the backend
   nota?: string;
   ticket?: Ticket;
}