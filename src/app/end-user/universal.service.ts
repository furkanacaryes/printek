import { Injectable } from '@angular/core';

import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export class UniversalService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  public get isBrowser() {
    return isPlatformBrowser(this.platformId)
  }
}
