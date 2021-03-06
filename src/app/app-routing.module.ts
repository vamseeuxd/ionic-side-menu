import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'vertical-cards', loadChildren: './pages/vertical-cards/vertical-cards.module#VerticalCardsPageModule' },
  { path: 'horizontal-cards', loadChildren: './pages/horizontal-cards/horizontal-cards.module#HorizontalCardsPageModule' }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
