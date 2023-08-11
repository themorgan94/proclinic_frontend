import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component pages
import { UserListComponent } from "./user-list/user-list.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";

const routes: Routes = [
  {
    path: "",
    component: UserListComponent
  },
  {
    path: "add-user",
    component: AddUserComponent
  },
  {
    path: "edit-user/:id",
    component: EditUserComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {}
