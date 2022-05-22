import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AddRefugeeComponent} from "./components/add-refugee/add-refugee.component";
import {AnnouncesComponent} from "./components/announces/announces.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {RefugeeListComponent} from "./components/refugee-list/refugee-list.component";
import {SavedConnectionsComponent} from "./components/saved-connections/saved-connections.component";
import {ViewAnnounceComponent} from "./components/view-announce/view-announce.component";
import {AddAnnounceComponent} from "./components/add-announce/add-announce.component";
import {MyAnnouncesComponent} from "./components/my-announces/my-announces.component";
import {EditRefugeeDialogComponent} from "./components/edit-refugee-dialog/edit-refugee-dialog.component";
import {DeleteConnectionComponent} from "./components/delete-connection/delete-connection.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'add-refugee',
    component: AddRefugeeComponent
  },
  {
    path: 'announces',
    component: AnnouncesComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'refugee-list',
    component: RefugeeListComponent
  },
  {
    path: 'saved-connections',
    component: SavedConnectionsComponent
  },
  {
    path: 'view-announce/:id',
    component: ViewAnnounceComponent
  },
  {
    path: 'view-connection/:id',
    component: DeleteConnectionComponent
  },
  {
    path: 'add-announce',
    component: AddAnnounceComponent
  },
  {
    path: 'my-announces',
    component: MyAnnouncesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
