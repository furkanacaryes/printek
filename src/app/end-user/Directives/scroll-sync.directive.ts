import { Directive, ElementRef, HostBinding, OnDestroy } from '@angular/core';

import { fromEvent, merge, Subscription } from 'rxjs';
import { map, throttleTime, debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[printekScrollSync]'
})
export class ScrollSyncDirective implements OnDestroy {

  source = fromEvent(window, 'scroll')
    .pipe(map(e => window.scrollY));

  sub: Subscription;
  windowY;


  constructor(el: ElementRef) {
    this.sub = merge(
      this.source.pipe(throttleTime(10)),
      this.source.pipe(debounceTime(10))
    ).subscribe(y => this.windowY = y);
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }


  @HostBinding('style.backgroundPosition')
  get position() {
    return `0 -${this.windowY}px`
  }
}
