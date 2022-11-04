import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavajaPageRoutingModule } from './navaja-routing.module';

import { NavajaPage } from './navaja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavajaPageRoutingModule
  ],
  declarations: [NavajaPage]
})
export class NavajaPageModule {}
