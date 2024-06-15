import {Injectable} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {MessageService} from "primeng/api";
@Injectable({
   providedIn: 'root'
})
export class HttpStatusService {
   constructor(private messageService: MessageService) {
   }
   procesar(error: HttpErrorResponse) {
      if (error.status === 0) {
         this.messageService.add({
            life: 10000,
            severity: 'error',
            summary: 'Error de conexión',
            detail: 'No se pudo obtener conexión con el servidor'
         });
      } else if (error.status === 400) {
         this.messageService.add({severity: 'error', summary: 'No se pudo procesar', detail: error.error.message});
      }
   }
}
