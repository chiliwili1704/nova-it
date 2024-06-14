import {Component, Input} from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";

@Component({
   selector: 'app-titulo',
   standalone: true,
   imports: [
      NgOptimizedImage,
      NgClass
   ],
   templateUrl: './titulo.component.html',
   styleUrl: './titulo.component.scss'
})
export class TituloComponent {
   @Input() titulo = ''
   @Input() subtitulo = ''
   @Input() icono = '';
   @Input("bg-mod") bg_mod = 'bg-white';
}