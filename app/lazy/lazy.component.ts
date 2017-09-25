
import { Component } from '@angular/core';
import { UserService } from './../services/user.service';

@Component({
  selector: 'lazy-app',
  styleUrls: ['lazy.component.scss'],
  template: `
    <div>
      <h1>lazy</h1>
      <title-cmp [myText]="someText"></title-cmp>
    </div>
  `
})
export class LazyComponent {
  private someText: String;

  constructor(private _userService: UserService) {
    this.someText = this._userService.userName;
    console.log('LazyComponent created');
    console.log('_userService -> ', this._userService.userName);
    this._userService.setUserName('John Doe');
    console.log('Updating the value in the user service -> ', this._userService.userName);
  }
}
