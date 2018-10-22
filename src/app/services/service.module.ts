import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PersonService } from './person.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [
    PersonService
  ]
})
export class ServiceModule {}
