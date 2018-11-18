import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from '@nx-electron/utils';
import { ELECTRON_PROVIDERS, ElectronService } from './services';

@NgModule({
  providers: [...ELECTRON_PROVIDERS]
})
export class NxeElectronCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: NxeElectronCoreModule,
    private _electronService: ElectronService
  ) {
    throwIfAlreadyLoaded(parentModule, 'NxeElectronCoreModule');
  }
}
