import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { WishlistPageComponent } from './wishlist-page/wishlist-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'wishlist', component: WishlistPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }