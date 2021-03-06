import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AtemiWazaComponent } from './indeling/atemi-waza/atemi-waza.component';
import { KatameWazaComponent } from './indeling/katame-waza/katame-waza.component';
import { NageWazaComponent } from './indeling/nage-waza/nage-waza.component';
import { LeerplanMainComponent } from './leerplan-main/leerplan-main.component';
import { LeerplanSidebarComponent } from './leerplan-sidebar/leerplan-sidebar.component';

const routes: Routes = [
  { path: '', component: LeerplanSidebarComponent,
    children: [
      { path: '', pathMatch: 'Full', redirectTo: 'home', data: { breadcrumb: 'Home' } },
      { path: 'home', component: LeerplanMainComponent, data: { breadcrumb: 'Home' }  },
      { path: 'nage-waza', component: NageWazaComponent, data: { breadcrumb: 'Nage Waza' }  },
      { path: 'katame-waza', component: KatameWazaComponent, data: { breadcrumb: 'Katame Waza' }  },
      { path: 'atemi-waza', component: AtemiWazaComponent, data: { breadcrumb: 'Atemi Waza' }  },
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeerplanRoutingModule { }
