import { UserService } from './../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'eager-app',
  styleUrls: ['eager.component.scss'],
  template: `
    <div>
      <h1>eager</h1>
      <title-cmp [myText]="someText"></title-cmp>
    </div>
  `
})
export class EagerComponent {
  private someText: String;

  constructor(private _userService: UserService) {
    this.someText = 'Title in a eager component';
    console.log('EagerComponent created');
    console.log('_userService -> ', this._userService.userName);
  }
}
