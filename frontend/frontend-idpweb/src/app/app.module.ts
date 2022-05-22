import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './components/register/register.component';
import { AddRefugeeComponent } from './components/add-refugee/add-refugee.component';
import { AnnouncesComponent } from './components/announces/announces.component';
import { RefugeeListComponent } from './components/refugee-list/refugee-list.component';
import { SavedConnectionsComponent } from './components/saved-connections/saved-connections.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewAnnounceComponent } from './components/view-announce/view-announce.component';
import { AddAnnounceComponent } from './components/add-announce/add-announce.component';
import { MyAnnouncesComponent } from './components/my-announces/my-announces.component';
import { EditRefugeeDialogComponent } from './components/edit-refugee-dialog/edit-refugee-dialog.component';
import { DeleteRefugeeDialogComponent } from './components/delete-refugee-dialog/delete-refugee-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "@auth0/auth0-angular";
import { EditAnnounceComponent } from './components/edit-announce/edit-announce.component';
import { DeleteAnnounceComponent } from './components/delete-announce/delete-announce.component';
import { DeleteConnectionComponent } from './components/delete-connection/delete-connection.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddRefugeeComponent,
    AnnouncesComponent,
    RefugeeListComponent,
    SavedConnectionsComponent,
    ProfileComponent,
    ViewAnnounceComponent,
    AddAnnounceComponent,
    MyAnnouncesComponent,
    EditRefugeeDialogComponent,
    DeleteRefugeeDialogComponent,
    ProfileComponent,
    DeleteConnectionComponent,
    EditAnnounceComponent,
    DeleteAnnounceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-5scu482n.us.auth0.com',
      clientId: '5PndFO7hI4VZV9fkQWWzPevlSAcK8na6',
      redirectUri: window.location.origin
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
