import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(private _userService: UserService) {

      this._userService.setUserName('Manolo el del bombo');
      console.log('User name -> ', this._userService.userName);

  }
}
