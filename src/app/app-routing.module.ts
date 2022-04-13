import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscordComponent } from './discord/discord.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LoginPageComponent } from './user/login-page/login-page.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'discord', component: DiscordComponent
  },
  {
    path: 'privacypolicy', component: PrivacyPolicyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
