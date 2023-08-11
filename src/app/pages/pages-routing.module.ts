import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component pages
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
    {
        path: "",
        component: DashboardComponent
    },
    {
      path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
    },
    {
      path: 'profile',
      component: ProfileComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
