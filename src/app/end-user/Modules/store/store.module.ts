import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './store.component';

const routes: Routes = [
  { path: '', component: StoreComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StoreComponent]
})
export class StoreModule { }
