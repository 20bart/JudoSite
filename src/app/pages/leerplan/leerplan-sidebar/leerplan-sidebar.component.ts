import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-leerplan-sidebar',
  templateUrl: './leerplan-sidebar.component.html',
  styleUrls: ['./leerplan-sidebar.component.css']
})
export class LeerplanSidebarComponent implements OnInit {
  // public disableClose: boolean;
  public sidebarOpen: boolean;
  // public w: number = window.innerWidth;

  // @ViewChild('sidenav') sidenav: MatSidenav;

  constructor() {
    // this.checkWidth();
  }

  ngOnInit() {
    // if (this.w > 450) {
    //   this.sidenav.open();
    // }
  }

  // onResize() {
  //   this.w = window.innerWidth;
  //   this.checkWidth();
  //   if (this.w > 450) {
  //     this.sidenav.open();
  //   }
  // }

  // private checkWidth() {
  //   if (this.w > 450) {
  //     this.disableClose = true;
  //   } else {
  //     this.disableClose = false;
  //   }
  // }

  public sidebarToggle() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  public sidebarClose() {
    if (this.sidebarOpen) {
      this.sidebarOpen = false;
    }
  }
}
