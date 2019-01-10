import { Directive, HostBinding, OnInit, OnDestroy } from '@angular/core';

import { fromEvent, merge, Subscription, Observable } from 'rxjs';
import { map, throttleTime, debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[printekScrollSync]'
})
export class ScrollSyncDirective implements OnInit, OnDestroy {

  sub: Subscription;
  scrollTop;
  sourceElement: any;
  event$: Observable<any>;


  constructor() {}

  ngOnInit() {
    this.sourceElement = document.querySelector('.printek-page');

    this.event$ = fromEvent(this.sourceElement, 'scroll')
      .pipe(map(e => this.sourceElement.scrollTop));

    this.sub = merge(
      this.event$.pipe(throttleTime(100)),
      this.event$.pipe(debounceTime(100))
    ).subscribe(y => this.scrollTop = y);
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }


  @HostBinding('style.backgroundPosition')
  get position() {
    return `center -${this.scrollTop}px`
  }
}
