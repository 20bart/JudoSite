import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FotoComponent } from './pages/foto/foto.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { LeerplanComponent } from './pages/leerplan/leerplan.component';
import { OlympiaTrophyComponent } from './pages/olympia-trophy/olympia-trophy.component';
import { TrainersComponent } from './pages/trainers/trainers.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'foto', component: FotoComponent },
  { path: 'trainers', component: TrainersComponent },
  { path: 'olympia-trophy', component: OlympiaTrophyComponent },
  { path: 'leerplan', component: LeerplanComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
