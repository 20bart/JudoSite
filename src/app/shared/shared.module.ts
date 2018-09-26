import { NgModule } from '@angular/core';

import { JudoContentComponent } from './judo-content/judo-content.component';

@NgModule({
  declarations: [JudoContentComponent],
  exports: [JudoContentComponent]
})
export class SharedModule {}
