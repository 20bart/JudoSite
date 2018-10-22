import { Person } from 'src/app/models/person.model';
import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {
  public board: Person[];
  public trainers: Person[];

  constructor(private peopleService: PersonService) {
    this.fillBoard();
    this.fillTrainers();
  }

  ngOnInit() {}

  private fillBoard() {
    this.peopleService.getBoard().subscribe((data) => {
      this.board = data;
    });
  }

  private fillTrainers(){
    this.peopleService.getTrainers().subscribe((data) => {
      this.trainers = data;
    });
  }
}
