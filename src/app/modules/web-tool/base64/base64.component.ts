import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {isCI} from "@angular/cli/src/utilities/environment-options";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-base64',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './base64.component.html',
  styleUrl: './base64.component.scss'
})
export class Base64Component implements OnInit{
  baseValue = '';
  resultValue = '';
  isEncoding = true;

  constructor(private _snackBar: MatSnackBar) {
  }

  ngOnInit() {

  }

  onBaseValueChange() {
    this.resultValue = this.isEncoding ? btoa(this.baseValue) : atob(this.baseValue);
  }

  decode() {
    this.isEncoding = !this.isEncoding;
    this.onBaseValueChange();
  }

  copy() {
    navigator.clipboard.writeText(this.resultValue).then();
    this._snackBar.open('Copy successfully', '', { duration: 2000 });
  }
}
