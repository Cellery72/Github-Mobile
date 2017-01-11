import { GithubUsers } from '../../providers/github-users';
import { User } from '../../models/user';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-user-followers',
  templateUrl: 'user-followers.html'
})
export class UserFollowersPage {

  users: User[];
  login: string;

  constructor(public navCtrl: NavController, private navParams: NavParams, private githubUsers: GithubUsers) {
    this.login = navParams.get('login');
    githubUsers.loadFollowers(this.login).subscribe(users => {
      this.users = users;
    })
  }

}
