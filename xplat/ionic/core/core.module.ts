import { NgModule, Optional, SkipSelf } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { throwIfAlreadyLoaded } from '@nx-electron/utils';
import { NxeCoreModule } from '@nx-electron/web';

@NgModule({
  imports: [NxeCoreModule, IonicModule.forRoot()]
})
export class NxeIonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: NxeIonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'NxeIonicCoreModule');
  }
}
