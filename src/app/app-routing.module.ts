import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./homepage/homepage.module').then(mod => mod.HomepageModule),
  },
  {
    path: "dashboard",
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),

  },
  {
    path: "homepage",
    loadChildren: () => import('./homepage/homepage.module').then(mod => mod.HomepageModule),

  },
  {
    path: "login",
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule),
  },
  {
    path: "register",
    loadChildren: () => import('./register/register.module').then(mod => mod.RegisterModule),
  },
  {
    path: "scholarships",
    loadChildren: () => import('./scholarships/scholarships.module').then(mod => mod.ScholarshipsModule),

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
