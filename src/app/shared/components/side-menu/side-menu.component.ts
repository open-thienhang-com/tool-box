import { Component } from '@angular/core';
import {AppConst} from "../../app-const";
import {NgClass, NgTemplateOutlet} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
const {appMenu} = AppConst;

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    RouterLink,
    NgClass
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  menu = appMenu;

  constructor(private router: Router) {
  }

  onMenuClick(url: string) {
    this.router.navigate([url]).then();
  }
}
