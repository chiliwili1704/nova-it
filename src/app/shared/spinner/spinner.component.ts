import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
@Component({
   selector: 'app-spinner',
   standalone: true,
   imports: [NgClass],
   templateUrl: './spinner.component.html',
   styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
   @Input("mensaje") mensaje: string
   @Input("text-color") color = ''
   @Input("modal") modal: boolean
}