import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdadPage } from './edad.page';

const routes: Routes = [
  {
    path: '',
    component: EdadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdadPageRoutingModule {}
