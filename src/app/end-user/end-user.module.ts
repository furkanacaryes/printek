import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EndUserRoutingModule } from './end-user-routing.module';
import { EndUserComponent } from './end-user.component';
import { ScrollSyncDirective } from './Directives/scroll-sync.directive';

@NgModule({
  imports: [
    CommonModule,
    EndUserRoutingModule
  ],
  declarations: [EndUserComponent, ScrollSyncDirective]
})
export class EndUserModule { }
