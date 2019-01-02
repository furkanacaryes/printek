import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EndUserComponent } from './end-user.component';

const routes: Routes = [
  {
    path: '',
    component: EndUserComponent,
    children: [
      // {
      //   path: 'magaza',
      //   loadChildren: './Modules/store/store.module#StoreModule'
      // },
      // {
      //   path: 'talep',
      //   loadChildren: './Modules/request/request.module#RequestModule'
      // },
      // {
      //   path: 'hesabim',
      //   loadChildren: './Modules/user/user.module#UserModule'
      // },
      // {
      //   path: 'sepetim',
      //   loadChildren: './Modules/cart/cart.module#CartModule'
      // },
      {
        path: 'iletisim',
        loadChildren: './Modules/contact/contact.module#ContactModule',
        data: { page: 'contact' }
      },
      {
        path: '',
        loadChildren: './Modules/services/services.module#ServicesModule',
        data: { page: 'services' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EndUserRoutingModule { }
