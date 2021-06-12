import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UdemyCouponsComponent } from './components/misc/udemy-coupons/udemy-coupons.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "misc/udemy-coupons", component: UdemyCouponsComponent },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
