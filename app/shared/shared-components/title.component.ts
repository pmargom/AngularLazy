import { UserService } from './../../services/user.service';
import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'title-cmp',
  templateUrl: 'title.component.html',
  styleUrls: ['title.component.scss']
})
export class TitleComponent {
  @Input() myText = '';

  constructor(private _userService: UserService) {
    console.log('Title component created');
  }
}
