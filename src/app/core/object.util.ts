export class ObjectUtil {
   static paramsVacios(filtro: any): boolean {
      if (!filtro) {
         return true;
      }
      for (const key in filtro) {
         if (filtro[key] !== null && filtro[key] !== undefined && filtro[key] !== '') {
            return false;
         }
      }
      return true;
   }

   static normalizar<K>(filtro: K): void {
      Object.entries(filtro).forEach(([key, value]) => {
         if (value === undefined || value == null) {
            delete filtro[key as keyof K];
         }
      });
   }
}