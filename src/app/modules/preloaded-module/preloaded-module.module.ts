import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloadedModuleRoutingModule } from './preloaded-module-routing.module';
import { PreloadedComponent } from './components/preloaded/preloaded.component';


@NgModule({
  declarations: [
    PreloadedComponent
  ],
  imports: [
    CommonModule,
    PreloadedModuleRoutingModule
  ]
})
export class PreloadedModuleModule { }
