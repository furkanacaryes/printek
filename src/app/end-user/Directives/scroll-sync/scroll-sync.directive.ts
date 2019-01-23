import { Directive, HostBinding, OnInit, OnDestroy } from '@angular/core';

import { fromEvent, merge, Subscription, Observable } from 'rxjs';
import { map, throttleTime, debounceTime } from 'rxjs/operators';

import { UniversalService } from '../../universal.service';

@Directive({
  selector: '[printekScrollSync]'
})
export class ScrollSyncDirective implements OnInit, OnDestroy {

  sub: Subscription;
  scrollTop = 0;
  sourceElement: any;
  event$: Observable<any>;


  constructor(private universal: UniversalService) {}

  ngOnInit() {
    if(this.universal.isBrowser) {
      this.sourceElement = document.querySelector('.printek-page');

      this.event$ = fromEvent(this.sourceElement, 'scroll')
        .pipe(map(e => this.sourceElement.scrollTop));

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
