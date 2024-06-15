import {URLBase} from "./URLBase";

export class URLUnidad extends URLBase {
   static readonly unidades = URLUnidad.baseUrl + "/unidad/unidades"
   static readonly generales = URLUnidad.baseUrl + "/unidad/generales"
}