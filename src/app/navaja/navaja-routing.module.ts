import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavajaPage } from './navaja.page';

const routes: Routes = [
  {
    path: '',
    component: NavajaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavajaPageRoutingModule {}
