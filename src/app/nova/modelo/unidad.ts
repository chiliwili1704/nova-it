import {UnidadContacto} from "./unidad-contacto";
import {Operatividad} from "./operatividad";

export interface Unidad {
   id?: number;
   clave?: string;
   nombre?: string;
   contacto?: UnidadContacto;
   operatividades?: Operatividad[]
}