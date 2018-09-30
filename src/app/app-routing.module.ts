import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './pages/contact/contact.component';
import { FotoComponent } from './pages/foto/foto.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { OlympiaTrophyComponent } from './pages/olympia-trophy/olympia-trophy.component';
import { TrainersComponent } from './pages/trainers/trainers.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
  { path: 'info', component: InfoComponent, data: { breadcrumb: 'Info' } },
  { path: 'foto', component: FotoComponent, data: { breadcrumb: 'Foto' } },
  {
    path: 'trainers',
    component: TrainersComponent,
    data: { breadcrumb: 'Trainers' }
  },
  {
    path: 'olympia-trophy',
    component: OlympiaTrophyComponent,
    data: { breadcrumb: 'Olympia Trophy' }
  },
  {
    path: 'leerplan',
    loadChildren: '../app/pages/leerplan/leerplan.module#LeerplanModule',
    data: { breadcrumb: 'Leerplan' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { breadcrumb: 'Contact' }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
