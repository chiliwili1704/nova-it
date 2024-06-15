import {Subject} from "rxjs";

export class Executor<T> {
   constructor() {
      this._subject = new Subject<{ key_cmd: T, value: any }>();
   }

   private _subject: Subject<{ key_cmd: T, value: any }>

   get subject(): Subject<{ key_cmd: T; value: any }> {
      return this._subject;
   }

   ejecutar(key_cmd: T, value: any) {
      this._subject.next({key_cmd, value});
   }
}