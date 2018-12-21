import { Component, OnInit } from '@angular/core';

import { Route } from '../../Interfaces/route';

@Component({
  selector: 'printek-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

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

}
