import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title = 'OpenFy';
  public user: User;
  public identity;
  public token;

  constructor() {
    this.user = new User('', '', '', '', '','ROLE_USER', '');
  }

  public onSubmit() {
    console.log(this.user);
  }
}
