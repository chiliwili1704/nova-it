import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PrimeNGConfig} from 'primeng/api';
import {LoadingInterceptorService, LoadingService, SpinnerComponent} from "@nova/spinner";
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@Component({
   selector: 'app-root',
   standalone: true,
   providers: [LoadingService, {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptorService, multi: true}],
  imports: [RouterOutlet, SpinnerComponent],
   templateUrl: './app.component.html',
   styleUrl: './app.component.scss'
})
export class AppComponent {
   title = 'nova-it';
   isLoading = true;

   constructor(private config: PrimeNGConfig, private loadingService: LoadingService) {
   }

   ngOnInit() {
      // Usar window.onload para detectar cuando la página ha cargado completamente
      window.onload = () => {
         this.loadingService.setLoading(false);
      };
      // Suscribirse al estado de carga del servicio de carga
      this.loadingService.loading$.subscribe(isLoading => {
         this.isLoading = isLoading;
         console.log(this.isLoading)
      });

      this.config.setTranslation({
         emptyFilterMessage: 'No se han encontrado resultados',
         dayNamesMin: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
         monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
         monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
         accept: 'Aceptar',
         reject: 'Cancelar',
      });
   }
}
