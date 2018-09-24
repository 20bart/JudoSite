import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JudoContentComponent } from './elements/judo-content/judo-content.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FotoComponent } from './pages/foto/foto.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { LeerplanComponent } from './pages/leerplan/leerplan.component';
import { OlympiaTrophyComponent } from './pages/olympia-trophy/olympia-trophy.component';
import { TrainersComponent } from './pages/trainers/trainers.component';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    FotoComponent,
    InfoComponent,
    LeerplanComponent,
    OlympiaTrophyComponent,
    TrainersComponent,
    NavbarComponent,
    JudoContentComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
