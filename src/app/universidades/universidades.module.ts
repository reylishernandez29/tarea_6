import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniversidadesPageRoutingModule } from './universidades-routing.module';

import { UniversidadesPage } from './universidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniversidadesPageRoutingModule
  ],
  declarations: [UniversidadesPage]
})
export class UniversidadesPageModule {}
