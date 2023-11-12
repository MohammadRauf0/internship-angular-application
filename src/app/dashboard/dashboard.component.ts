import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @ViewChild('drawer') drawer!: MatDrawer;

  openDrawer() {
    this.drawer.open();
  }

  closeDrawer() {
    this.drawer.close();
  }

  toggleDrawer() {
    this.drawer.toggle();
  }
}
