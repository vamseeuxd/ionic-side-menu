import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HorizontalCardsPage } from './horizontal-cards.page';

const routes: Routes = [
  {
    path: '',
    component: HorizontalCardsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HorizontalCardsPage]
})
export class HorizontalCardsPageModule {}
