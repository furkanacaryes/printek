import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { environment as env } from '../../../../environments/environment';
import { AcarUiModule } from 'acar-ui';

import { ContactComponent } from './contact.component';

const routes: Routes = [
  { path: '', component: ContactComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({ apiKey: env.MAPS_API_KEY }),
    AgmDirectionModule,
    AcarUiModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
