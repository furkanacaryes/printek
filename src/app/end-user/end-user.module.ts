import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EndUserRoutingModule } from './end-user-routing.module';
import { EndUserComponent } from './end-user.component';

@NgModule({
  imports: [
    CommonModule,
    EndUserRoutingModule
  ],
  declarations: [EndUserComponent]
})
export class EndUserModule { }
