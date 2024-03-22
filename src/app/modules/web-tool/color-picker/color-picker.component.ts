import { Component } from '@angular/core';
import {ColorPickerModule} from "primeng/colorpicker";
import {FormsModule} from "@angular/forms";
import {ColorPaletteComponent} from "./color-palette/color-palette.component";
import {ColorSliderComponent} from "./color-slider/color-slider.component";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [
    ColorPickerModule,
    FormsModule,
    ColorPaletteComponent,
    ColorSliderComponent,
    NgStyle
  ],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss'
})
export class ColorPickerComponent {
  public hue = ''
  public color = '';
  hexColor: any;

  convertHexToRgb(hexColor: string) {
    if (!hexColor) {
      return '';
    }
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    return `${r}, ${g}, ${b}`;
  }
}
