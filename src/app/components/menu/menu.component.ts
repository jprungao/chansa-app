import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() activeMenu = false

  constructor(private router: Router) {}

  hideMenu() {
    this.activeMenu = false
  }

  logout() {
    this.router.navigate(['/login'])
    localStorage.removeItem('JWT_TOKEN')


  }
}
