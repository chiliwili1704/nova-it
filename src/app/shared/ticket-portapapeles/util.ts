import {Ticket} from "@nova/modelo";

export function formatearTicket(data: Ticket): string {
   const agenteStr = data.agente ? `Agente: ${data.agente}` : '';
   return `= REPORTE | ${data.reporte.area.nombre.toUpperCase()} =\nUnidad: ${data.unidad.clave} ${data.unidad.nombre}\nTipo: ${data.reporte.nombre}\nFolio: ${data.folio}\nEstado: ${data.estado.nombre}\n${agenteStr}`;
}