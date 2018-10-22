import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { delay } from 'rxjs/operators';

import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private boardMembers: Person[];
  private trainers: Person[];

  constructor() {
    this.fillBoard();
    this.fillTrainers();
  }

  public getBoard(): Observable<Person[]> {
    return of(this.boardMembers).pipe(delay(0));
  }

  public getTrainers(): Observable<Person[]> {
    return of(this.trainers).pipe(delay(0));
  }

  // MockData

  private fillBoard(){
    this.boardMembers = [
      {
        firstName: 'Heidi',
        lastName: 'Vandereyt',
        role: 'Voorzitter',
        phone: '0498755293',
        email: 'heidivandereyt@gmail.com',
        imagePath: 'http://place-hold.it/300x150'
      },
      {
        firstName: 'Benny',
        lastName: 'Stals',
        role: 'Ondervoorzitter',
        phone: '0499282468',
        email: 'stalsbenny@gmail.com',
        imagePath: 'http://place-hold.it/300x150'
      },
      {
        firstName: 'Michel',
        lastName: 'Stals',
        role: 'Secretaris',
        phone: '0496519754',
        email: 'michel.stals@skynet.be',
        imagePath: 'http://place-hold.it/300x150'
      },
      {
        firstName: 'Peter',
        lastName: 'Huybrechts',
        role: 'Bestuurslid',
        phone: '0496325498',
        email: 'huyb.peter@gmail.com',
        imagePath: 'http://place-hold.it/300x150'
      },
      {
        firstName: 'Yves',
        lastName: 'Ozog',
        role: 'Bestuurslid',
        phone: '',
        email: '',
        imagePath: 'http://place-hold.it/300x150'
      },
      {
        firstName: 'Martijn',
        lastName: 'Mertens',
        role: 'Bestuurslid',
        phone: '',
        email: '',
        imagePath: 'http://place-hold.it/300x150'
      }
    ];
  }

  private fillTrainers(){
    this.trainers = [
      {
        firstName: 'Marc',
        lastName: 'Goris',
        role: 'Hoofdtrainer & BLOSO Trainer B',
        phone: '',
        email: '',
        imagePath: 'http://place-hold.it/300x150'
      },
      {
        firstName: 'Yves',
        lastName: 'Ozog',
        role: 'BLOSO initiator',
        phone: '',
        email: '',
        imagePath: 'http://place-hold.it/300x150'
      },
      {
        firstName: 'Benny',
        lastName: 'Stals',
        role: 'BLOSO initiator',
        phone: '0499282468',
        email: 'stalsbenny@gmail.com',
        imagePath: 'http://place-hold.it/300x150'
      },
      {
        firstName: 'Heidi',
        lastName: 'Vandereyt',
        role: 'BLOSO initiator',
        phone: '0498755293',
        email: 'heidivandereyt@gmail.com',
        imagePath: 'http://place-hold.it/300x150'
      }
    ];
  }
}
