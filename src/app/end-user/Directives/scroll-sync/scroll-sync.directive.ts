import { Directive, HostBinding, OnInit, OnDestroy } from '@angular/core';

import { fromEvent, merge, Subscription, Observable } from 'rxjs';
import { map, throttleTime, debounceTime } from 'rxjs/operators';

import { UniversalService } from '../../universal.service';

@Directive({
  selector: '[printekScrollSync]'
})
export class ScrollSyncDirective implements OnInit, OnDestroy {

  sourceElem;
  sub: Subscription;
  scrollTop = 0;
  event$: Observable<any>;


  constructor(private universal: UniversalService) {}

  ngOnInit() {
    if(this.universal.isBrowser) {

      if(window.innerWidth < 991)
        return;

      this.sourceElem = document.querySelector('.printek-window');

      this.event$ = fromEvent(this.sourceElem, 'scroll')
        .pipe(map(e => this.sourceElem.scrollTop));

      this.sub = merge(
        this.event$.pipe(throttleTime(100)),
        this.event$.pipe(debounceTime(100))
      ).subscribe(y => this.scrollTop = y);
    }
  }

  ngOnDestroy() {
    if(this.sub)
      this.sub.unsubscribe()
  }


  @HostBinding('style.backgroundPosition')
  get position() {
    return `center -${this.scrollTop}px`
  }
}
