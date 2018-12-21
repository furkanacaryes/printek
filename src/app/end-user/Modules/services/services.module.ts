import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent } from './services.component';
import { PrintekUniverseComponent } from './Components/printek-universe/printek-universe.component';
import { MobileDeviceComponent } from './Components/mobile-device/mobile-device.component';
import { CartridgeComponent } from './Components/cartridge/cartridge.component';
import { PrinterComponent } from './Components/printer/printer.component';

import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: ServicesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    ServicesComponent,
    PrintekUniverseComponent,
    MobileDeviceComponent,
    CartridgeComponent,
    PrinterComponent
  ]
})
export class ServicesModule { }
