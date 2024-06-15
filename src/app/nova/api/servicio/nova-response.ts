export interface NovaResponse<T> {
   data?: T;
   status?: number;
   message?: string;
   errors?: any;
}