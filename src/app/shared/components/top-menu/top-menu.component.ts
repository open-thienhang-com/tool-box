import {Component, OnInit} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [
    MenubarModule
  ],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss'
})
export class TopMenuComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Web tool',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Color picker',
            icon: 'pi pi-fw pi-trash',
            routerLink: 'color-picker'
          },
        ]
      },
    ];
  }

}
