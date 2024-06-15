import {FiltroData} from "./filtro.data";
import {Paginado} from "@nova/paginado";

export interface TicketParams extends Paginado, FiltroData {
}