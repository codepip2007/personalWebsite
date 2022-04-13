import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

// Components

import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule,
    SharedModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    LayoutModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
