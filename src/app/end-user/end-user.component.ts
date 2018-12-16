import { Component, OnInit } from '@angular/core';
import { trigger, transition, group, query, style, animate } from '@angular/animations';

import { Route } from './Interfaces/route';


@Component({
  selector: 'printek-end-user',
  templateUrl: './end-user.component.html',
  styleUrls: ['./end-user.component.scss'],
  animations: [
    trigger('route', [

      // Services to Contact Component Transition
      transition('services => contact', group([

        query(':leave .barycenter', [
          animate('600ms 600ms ease', style({
            position: 'var(--cover-pos)',
            width: 'var(--cover)',
            height: 'var(--cover)'
          }))
        ], { optional: true }),

        query(':enter', [
          style({opacity: 0, zIndex: 3}), // set zIndex 3 locally
          animate('600ms 1200ms ease', style({opacity: 1}))
        ], { optional: true })
      ])),


      // Contact to Services Component Transition
      transition('contact => services', group([

        query(':leave', [
          style({opacity: '*', zIndex: 2}),
          animate('600ms ease', style({opacity: 0}))
        ], { optional: true }),

        query(':enter .barycenter', [
          style({
            position: 'var(--cover-pos)',
            width: 'var(--cover)',
            height: 'var(--cover)'
          }),
          animate('600ms 600ms ease', style({
            width: '*',
            height: '*'
          }))
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
