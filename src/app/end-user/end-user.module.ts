import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EndUserRoutingModule } from './end-user-routing.module';

import { EndUserComponent } from './end-user.component';
import { SharedModule } from './Modules/shared/shared.module';

import { ScrollSyncDirective } from './Directives/scroll-sync/scroll-sync.directive';
import { LiveContentDirective } from './Directives/live-content/live-content.directive';

@NgModule({
  imports: [
    CommonModule,
    EndUserRoutingModule,
    SharedModule
  ],
  declarations: [
    ScrollSyncDirective,
    EndUserComponent,
    LiveContentDirective
  ]
})
export class EndUserModule { }
