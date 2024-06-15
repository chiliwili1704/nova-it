import {Injectable} from '@angular/core';
import {Executor} from "@nova/executor";

export enum GeneralView {
   OBTENER_HISTORIAL = 1, RESET_SEGUIMIENTO,
}

@Injectable({
   providedIn: 'root'
})
export class GeneralesService extends Executor<GeneralView> {
   constructor() {
      super()
   }
}
