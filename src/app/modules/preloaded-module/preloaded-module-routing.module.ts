import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadedComponent } from './components/preloaded/preloaded.component';

const routes: Routes = [{ path: '', component: PreloadedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreloadedModuleRoutingModule {}
