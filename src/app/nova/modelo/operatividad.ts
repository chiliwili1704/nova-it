import {Horario} from "./horario";

export interface Operatividad {
   id?: number;
   horario?: Horario;
   apertura?: Date;
   cierre?: Date;
   activo?: boolean;
}