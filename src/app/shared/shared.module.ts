import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbsModule } from 'ng6-breadcrumbs';

import { JudoContentComponent } from './judo-content/judo-content.component';
import { MaterialModule } from './material.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MobilePipe } from './pipes/mobile.pipe';
import { PersonCardComponent } from './person-card/person-card.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BreadcrumbsModule
  ],
  declarations: [
    JudoContentComponent,
    SideBarComponent,
    PersonCardComponent,

    // Pipes
    MobilePipe
  ],
  exports: [
    JudoContentComponent,
    SideBarComponent,
    PersonCardComponent
  ]
})
export class SharedModule {}
