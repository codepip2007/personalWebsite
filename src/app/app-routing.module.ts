import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscordComponent } from './discord/discord.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'discord', component: DiscordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
