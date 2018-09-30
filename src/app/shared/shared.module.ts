import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbsModule } from 'ng6-breadcrumbs';

import { JudoContentComponent } from './judo-content/judo-content.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  imports: [
    CommonModule,
    BreadcrumbsModule
  ],
  declarations: [
    JudoContentComponent,
    SideBarComponent
  ],
  exports: [
    JudoContentComponent,
    SideBarComponent
  ]
})
export class SharedModule {}
