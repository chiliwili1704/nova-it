import {environment} from "@env/environment";

export class URLBase {
   protected static readonly baseUrl = `${environment.hostBackend}/ws/comialex/v1`;
}