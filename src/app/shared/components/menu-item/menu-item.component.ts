import {Component, Input} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MenuItem} from "../../../core/models/menu-item";
import {MatButtonModule} from "@angular/material/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  @Input() menuItem = new MenuItem();

  constructor(private router: Router) {
  }

  onMenuClicked(menu: MenuItem) {
    if (menu.routerLink) {
      this.router.navigate([menu.routerLink]).then();
    }
  }
}
