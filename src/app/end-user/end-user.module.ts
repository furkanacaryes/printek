import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EndUserRoutingModule } from './end-user-routing.module';

import { ScrollSyncDirective } from './Directives/scroll-sync/scroll-sync.directive';
import { EndUserComponent } from './end-user.component';
import { SharedModule } from './Modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EndUserRoutingModule,
    SharedModule
  ],
  declarations: [
    ScrollSyncDirective,
    EndUserComponent
  ]
})
export class EndUserModule { }
