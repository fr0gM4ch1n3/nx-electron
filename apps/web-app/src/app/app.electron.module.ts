import { NgModule } from '@angular/core';
import { NxeElectronCoreModule } from '@nx-electron/electron';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppModule, NxeElectronCoreModule],
  bootstrap: [AppComponent]
})
export class AppElectronModule {}
