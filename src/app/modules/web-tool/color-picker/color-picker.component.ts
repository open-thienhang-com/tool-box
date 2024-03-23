import {Component} from '@angular/core';
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
  hue = '';
  rgbValue = '';
  hexValue = '';
  cmykValue = '';

  onSelectColor(rgbValue: string[]) {
    this.rgbValue = rgbValue.join(', ');
    this.hexValue = this.rgbToHex(rgbValue);
    this.cmykValue = this.rbgToCmyk(rgbValue).map(item => `${Math.round(item * 100)}%`).join(', ');
  }

  rgbToHex(rgb: any[]) {
    const convertToHex = (c: any) => {
      const hex = parseInt(c).toString(16);
      return hex.length == 1 ? '0' + hex : hex;
    };
    return '#' + convertToHex(rgb[0]) + convertToHex(rgb[1]) + convertToHex(rgb[2]);
  }

  rbgToCmyk(rgb: any[]) {
    let computedC = 0;
    let computedM = 0;
    let computedY = 0;
    let computedK = 0;

    let r = parseInt(rgb[0]);
    let g = parseInt(rgb[1]);
    let b = parseInt(rgb[2]);

    computedC = 1 - (r / 255);
    computedM = 1 - (g / 255);
    computedY = 1 - (b / 255);

    const minCMY = Math.min(computedC, Math.min(computedM, computedY));
    computedC = (computedC - minCMY) / (1 - minCMY);
    computedM = (computedM - minCMY) / (1 - minCMY);
    computedY = (computedY - minCMY) / (1 - minCMY);
    computedK = minCMY;

    return [computedC, computedM, computedY, computedK];
  }
}
