import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {size} from "lodash";

@Component({
  selector: 'app-word-counter',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './word-counter.component.html',
  styleUrl: './word-counter.component.scss'
})
export class WordCounterComponent {
  value = '';
  wordNumber = 0;
  characterNumber = 0;

  count() {
    this.wordNumber = this.value.trim() ? this.value.trim().split(/\s+/).length : 0;
    this.characterNumber = size(this.value);
  }
}
