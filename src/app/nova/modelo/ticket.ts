import {Unidad} from "./unidad";
import {Reporte} from "./reporte";
import {EstadoReporte} from "./estado-reporte";
import {Seguimiento} from "./seguimiento";

export interface Ticket {
   id?: number;
   unidad?: Unidad;
   reporte?: Reporte;
   estado?: EstadoReporte;
   folio?: string;
   fecha?: string;
   agente?: string;
   nota?: string;
   visible?: boolean;
   seguimientos?: Seguimiento[];
}