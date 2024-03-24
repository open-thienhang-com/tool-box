import {Component} from '@angular/core';
import {InputTextareaModule} from "primeng/inputtextarea";
import {PaginatorModule} from "primeng/paginator";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-case-converter',
  standalone: true,
  imports: [
    InputTextareaModule,
    PaginatorModule,
    ButtonModule
  ],
  templateUrl: './case-converter.component.html',
  styleUrl: './case-converter.component.scss'
})
export class CaseConverterComponent {
  value = '';
  convertedValue = ''

  toLowerCase() {
    this.convertedValue = this.value.toLowerCase();
  }

  toUpperCase() {
    this.convertedValue = this.value.toUpperCase();
  }
}
