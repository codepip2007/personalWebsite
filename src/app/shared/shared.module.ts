import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Projects
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';

// Components
import { ShellComponent } from './shell/shell.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { ProjectsComponent } from '../projects/projects.component';
import { DiscordComponent } from '../discord/discord.component';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component'

const components = [
  ShellComponent,
  HomePageComponent,
  ProjectsComponent,
  DiscordComponent,
  PrivacyPolicyComponent,
];

const modules = [
  CommonModule,
  RouterModule,
  MatToolbarModule,
  MatIconModule,
  LayoutModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  AngularFireAuthModule,
  AngularFirestoreModule,
  BrowserModule,
  HttpClientModule,
  BrowserAnimationsModule
];

@NgModule({
  declarations: [...components],
  imports: [
    ...modules
  ],
  exports: [...modules, ...components]
})
export class SharedModule { }
