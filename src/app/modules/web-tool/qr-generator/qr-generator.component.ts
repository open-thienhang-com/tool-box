import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {QRCodeModule} from "angularx-qrcode";
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FormsModule} from "@angular/forms";
import {ColorPickerModule} from "primeng/colorpicker";
import {SliderModule} from "primeng/slider";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-qr-generator',
  standalone: true,
  imports: [
    QRCodeModule,
    InputTextareaModule,
    FormsModule,
    ColorPickerModule,
    SliderModule,
    ButtonModule
  ],
  templateUrl: './qr-generator.component.html',
  styleUrl: './qr-generator.component.scss'
})
export class QrGeneratorComponent {
  value = '';
  colorDark = '#000000';
  colorLight = '#ffffff';
  qrSize = 50;
  @ViewChild('qrcode') qrcode: any;

  constructor(private cdr: ChangeDetectorRef) {
  }

  downloadQrCodeImage() {
    this.cdr.detectChanges();
    const parentElement = this.qrcode.qrcElement.nativeElement.querySelector("canvas");
    const link = document.createElement("a");
    link.download = "Qrcode.jpg";
    link.href = parentElement.toDataURL();
    link.click();
  }
}
