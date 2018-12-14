import { Component, OnInit } from '@angular/core';
import { trigger, transition, group, query, style, animate } from '@angular/animations';

import { Route } from './Interfaces/route';

@Component({
  selector: 'printek-end-user',
  templateUrl: './end-user.component.html',
  styleUrls: ['./end-user.component.scss'],
  animations: [
    trigger('route', [
      transition('services => contact', group([
        query(':leave .barycenter', [
          animate('600ms 600ms ease', style({transform: 'scale(5.5)'}))
        ], { optional: true }),
        query(':enter', [
          style({opacity: 0, zIndex: 3}),
          animate('600ms 1200ms ease', style({opacity: 1}))
        ], { optional: true })
      ])),

      transition('contact => services', group([
        query(':leave', [
          style({opacity: '*', zIndex: 2}),
          animate('600ms ease', style({opacity: 0}))
        ], { optional: true }),
        query(':enter .barycenter', [
          style({transform: 'scale(5.5)'}),
          animate('600ms 600ms ease', style({transform: 'scale(1)'}))
        ], { optional: true })
      ]))
    ])
  ]
})
export class EndUserComponent implements OnInit {

  routes: Route[] = [
    { name: 'Servisler', routerLink: '',          icon: 'services' },
    { name: 'Mağaza',    routerLink: '/magaza',   icon: 'store' },
    { name: 'Talep',     routerLink: '/talep',    icon: 'request' },
    { name: 'İletişim',  routerLink: '/iletisim', icon: 'contact' },
    { name: '',          routerLink: '/hesabim',  icon: 'user' },
    { name: '',          routerLink: '/sepetim',  icon: 'cart' },
  ];
  

  constructor() { }

  ngOnInit() {
  }


  getState(o) {
    return o['page'];
  }

}
