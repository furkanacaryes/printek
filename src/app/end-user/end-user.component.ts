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
    if(this.isMobile)
      this.menuView = !this.menuView
  }

  scrollToBarycenter(o) {
    if(o['page'] === 'contact') {

      if(!this.universal.isBrowser)
        return;

      // Jumpy Fix
      // Setting scrollY to 0 prevents jumpy :enter
      // while navigating from 'printek-services' to 'printek-contact'
      setTimeout(_ => {
        document.querySelector('.printek-window')
          .scroll({ top: 0, behavior: 'instant' });
      }, 1200);

      // if(!this.menuView)
        // TODO : Behaves different cross-browser
        (document.querySelector('.barycenter') || document.body)
          .scrollIntoView({ behavior: 'smooth' });
    }
  }
}
