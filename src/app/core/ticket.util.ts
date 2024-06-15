import {Ticket} from "@nova/modelo";

export class TicketUtil {
   private static readonly BASE_36_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

   static generarFolio(): string {
      const fecha = new Date();
      const partes = [TicketUtil.toBase36(fecha.getFullYear() % 100), TicketUtil.toBase36(TicketUtil.obtenerDia(fecha)), TicketUtil.toBase36(fecha.getHours()), TicketUtil.toBase36(fecha.getMinutes()), TicketUtil.toBase36(fecha.getSeconds()), TicketUtil.toBase36(Math.floor(Math.random() * 36))];
      return partes.join('');
   }

   static formatearTicket(data: Ticket): string {
      const agenteStr = data.agente ? `Agente: ${data.agente}` : '';
      return `= REPORTE | ${data.reporte.area.nombre.toUpperCase()} =\nUnidad: ${data.unidad.clave} ${data.unidad.nombre}\nTipo: ${data.reporte.nombre}\nFolio: ${data.folio}\nEstado: ${data.estado.nombre}\n${agenteStr}`;
   }

   private static obtenerDia(fecha: Date): number {
      const inicioDeAnio = new Date(fecha.getFullYear(), 0, 0);
      const diff = fecha.getTime() - inicioDeAnio.getTime();
      const unDia = 1000 * 60 * 60 * 24;
      return Math.floor(diff / unDia) + 1;
   }

   private static toBase36(num: number): string {
      let result = '';
      do {
         result = TicketUtil.BASE_36_CHARS[num % 36] + result;
         num = Math.floor(num / 36);
      } while (num > 0);
      return result;
   }
}