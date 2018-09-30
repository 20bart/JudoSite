import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-leerplan-main',
  templateUrl: './leerplan-main.component.html',
  styleUrls: ['./leerplan-main.component.css']
})
export class LeerplanMainComponent implements OnInit {

  // public disableClose: boolean;
  // public w: number = window.innerWidth;

  // @ViewChild('sidenav')
  // sidenav: MatSidenav;

  constructor() {
    //  this.checkWidth();
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
}
