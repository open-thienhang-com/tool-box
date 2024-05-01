import {Component, OnInit} from '@angular/core';
import {MenuItem} from "../../../core/models/menu-item";
import {MenuItemComponent} from "../menu-item/menu-item.component";

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [
    MenuItemComponent

  ],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss'
})
export class TopMenuComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        name: 'Web tool',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            name: 'Color picker',
            icon: 'pi pi-fw pi-trash',
            routerLink: 'color-picker'
          },
          {
            name: 'QR Generator',
            icon: 'pi pi-fw pi-trash',
            routerLink: 'qr-generator'
          },
        ]
      },
      {
        name: 'Text',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            name: 'Word counter',
            icon: 'pi pi-fw pi-trash',
            routerLink: 'word-counter'
          },
          {
            name: 'Case converted',
            icon: 'pi pi-fw pi-trash',
            routerLink: 'case-converted'
          },
        ]
      },
    ];
  }

}
