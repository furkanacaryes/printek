import { Component, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';

import { routeAnimation } from './Animations/route.animation';
import { aSecondPlease } from './Animations/aSecondPlease.animation';

import { UniversalService } from './universal.service';


@Component({
  selector: 'printek-end-user',
  templateUrl: './end-user.component.html',
  styleUrls: ['./end-user.component.scss'],
  animations: [
    trigger('route', routeAnimation),
    trigger('aSecondPlease', aSecondPlease),
  ]
})
export class EndUserComponent implements OnInit {

  menuView = false;


  constructor(private universal: UniversalService) { }

  ngOnInit() {
  }


  getState(o) {
    return o['page']
  }

  get isMobile() {
    return this.universal.isBrowser ?
      window.innerWidth <= 991 : false
  }

  toggleMenu() {
    if(this.isMobile) {

      const scrollPos = Math.max(
        document.scrollingElement.scrollTop, this.window.scrollTop
      );

      if(!this.menuView) {
        this.window.classList.add('boxed');
        this.window.scroll({ top: scrollPos });
      } else {
        setTimeout( _ => {
          this.window.classList.remove('boxed');
          document.scrollingElement.scroll({ top: scrollPos })
        }, 700)
      }

      this.menuView = !this.menuView
    }
  }

  get window() {
    return document.querySelector('.printek-window')
  }

  scrollToBarycenter(o) {
    if(o['page'] === 'contact') {

      if(!this.universal.isBrowser)
        return;

      // Jumpy Fix
      // Setting scrollY to 0 prevents jumpy :enter
      // while navigating from 'printek-services' to 'printek-contact'
      setTimeout(_ => document.scrollingElement.scroll({ top: 0 }), 1200);

      if(!this.menuView)
        (document.querySelector('.barycenter') || document.body)
          .scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'end'
          });
    }
  }
}
