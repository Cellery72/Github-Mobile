import { UserFollowersPage } from '../pages/user-followers/user-followers';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { GithubUsers } from '../providers/github-users';
import { ReposPage } from '../pages/repos/repos';
import { OrganizationsPage } from '../pages/organizations/organizations';
import { UsersPage } from '../pages/users/users';

@NgModule({
  declarations: [
    MyApp,
    ReposPage,
    OrganizationsPage,
    UsersPage,
    UserDetailsPage,
    UserFollowersPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReposPage,
    OrganizationsPage,
    UsersPage,
    UserDetailsPage,
    UserFollowersPage
  ],
  providers: [GithubUsers, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
