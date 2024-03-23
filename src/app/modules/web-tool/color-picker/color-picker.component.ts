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
  hslValue = '';
  hsvValue = '';

  onSelectColor(rgbValue: string[]) {
    this.rgbValue = rgbValue.join(', ');
    this.hexValue = this.rgbToHex(rgbValue);
    this.cmykValue = this.rbgToCmyk(rgbValue).map(item => `${Math.round(item * 100)}%`).join(', ');
    this.hslValue = this.rgbToHsl(rgbValue).join(', ');
    this.hsvValue = this.rgbToHsV(rgbValue).join(', ');
  }

  rgbToHex(rgb: any[]) {
    const [r, g, b] = rgb.map(item => parseInt(item));
    return '#' + ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
  }

  rbgToCmyk(rgb: any[]) {
    let computedC = 0;
    let computedM = 0;
    let computedY = 0;
    let computedK = 0;
    const [r, g, b] = rgb.map(item => parseInt(item));

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

  rgbToHsl(rgb: any[]) {
    const [r, g, b] = rgb
    const normalizedR = r / 255;
    const normalizedG = g / 255;
    const normalizedB = b / 255;

    // Find the maximum and minimum values of RGB
    const max = Math.max(normalizedR, normalizedG, normalizedB);
    const min = Math.min(normalizedR, normalizedG, normalizedB);

    // Calculate lightness
    const lightness = (max + min) / 2;

    let hue = 0;
    let saturation = 0;

    // Calculate saturation and hue if not grayscale
    if (max !== min) {
      const delta = max - min;
      saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

      switch (max) {
        case normalizedR:
          hue = ((normalizedG - normalizedB) / delta + (normalizedG < normalizedB ? 6 : 0)) * 60;
          break;
        case normalizedG:
          hue = ((normalizedB - normalizedR) / delta + 2) * 60;
          break;
        case normalizedB:
          hue = ((normalizedR - normalizedG) / delta + 4) * 60;
          break;
      }
    }
    return [Math.round(hue) + '°', Math.round(saturation * 100) + '%', Math.round(lightness * 100) + '%'];
  }

  rgbToHsV(rgb: any[]) {
    const [r, g, b] = rgb
    const normalizedR = r / 255;
    const normalizedG = g / 255;
    const normalizedB = b / 255;

    // Find the maximum and minimum values of RGB
    const max = Math.max(normalizedR, normalizedG, normalizedB);
    const min = Math.min(normalizedR, normalizedG, normalizedB);

    // Calculate value
    const value = max;

    let hue = 0;
    let saturation = 0;

    // Calculate saturation and hue if not grayscale
    if (max !== min) {
      const delta = max - min;
      saturation = delta / max;

      switch (max) {
        case normalizedR:
          hue = ((normalizedG - normalizedB) / delta + (normalizedG < normalizedB ? 6 : 0)) * 60;
          break;
        case normalizedG:
          hue = ((normalizedB - normalizedR) / delta + 2) * 60;
          break;
        case normalizedB:
          hue = ((normalizedR - normalizedG) / delta + 4) * 60;
          break;
      }
    }
    return [Math.round(hue) + '°', Math.round(saturation * 100) + '%', Math.round(value * 100) + '%'];
  }
}
