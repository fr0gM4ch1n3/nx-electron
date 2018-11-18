import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@nx-electron/web';

@Component({
  selector: 'nxe-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
