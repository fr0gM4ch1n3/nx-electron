import { Component } from '@angular/core';

// libs
import { BaseComponent } from '@nx-electron/core';
import { AppService } from '@nx-electron/nativescript/core';

export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
