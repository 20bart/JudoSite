import { Component, OnInit } from '@angular/core';

import { Gordel } from '../../../models/gordel.model';

@Component({
  selector: 'app-leerplan-main',
  templateUrl: './leerplan-main.component.html',
  styleUrls: ['./leerplan-main.component.css']
})
export class LeerplanMainComponent implements OnInit {
  public gordels: Gordel[];

  constructor() {
    this.fillGordels();
  }

  ngOnInit() {}

  private fillGordels() {
    this.gordels = [
      { kyu: 6, color: 'wit',    name: 'rokyu' },
      { kyu: 5, color: 'geel',   name: 'gokyu' },
      { kyu: 4, color: 'oranje', name: 'yonkyu' },
      { kyu: 3, color: 'groen',  name: 'sankyu' },
      { kyu: 2, color: 'blauw',  name: 'nikyu' },
      { kyu: 1, color: 'bruin',  name: 'ikkyu' }
    ];
  }
}
