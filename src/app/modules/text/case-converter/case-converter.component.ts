import {Component} from '@angular/core';

@Component({
  selector: 'app-case-converter',
  standalone: true,
  imports: [
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
