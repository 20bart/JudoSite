import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../../shared/material.module';
import { LeerplanMainComponent } from './leerplan-main/leerplan-main.component';
import { LeerplanRoutingModule } from './leerplan-routing.module';
import { LeerplanSidebarComponent } from './leerplan-sidebar/leerplan-sidebar.component';
import { KatameWazaComponent } from './indeling/katame-waza/katame-waza.component';
import { NageWazaComponent } from './indeling/nage-waza/nage-waza.component';
import { AtemiWazaComponent } from './indeling/atemi-waza/atemi-waza.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    LeerplanRoutingModule
  ],
  declarations: [
    LeerplanMainComponent,
    LeerplanSidebarComponent,
    KatameWazaComponent,
    NageWazaComponent,
    AtemiWazaComponent
  ]
})
export class LeerplanModule { }
