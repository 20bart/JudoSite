import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from './../shared/material.module';
import { SharedModule } from './../shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { FotoComponent } from './foto/foto.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OlympiaTrophyComponent } from './olympia-trophy/olympia-trophy.component';
import { TrainersComponent } from './trainers/trainers.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [
    ContactComponent,
    FotoComponent,
    HomeComponent,
    InfoComponent,
    OlympiaTrophyComponent,
    TrainersComponent,
    NotFoundComponent
  ],
  exports: [
    ContactComponent,
    FotoComponent,
    HomeComponent,
    InfoComponent,
    OlympiaTrophyComponent,
    TrainersComponent
  ]
})
export class PagesModule { }
