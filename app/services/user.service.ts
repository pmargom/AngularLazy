import { Injectable, Optional } from '@angular/core';

let nextId = 1;

export class UserServiceConfig {
  userName = 'Philip Marlowe';
}

@Injectable()
export class UserService {
  private _id = nextId++;
  private _userName: string;

  constructor(@Optional() config: UserServiceConfig) {
    console.log(`User Service created -> ${this._userName}`);
    if (config) this._userName = config.userName;
  }

  get userName() {
    const suffix = this._id > 1 ? ` times ${this._id}` : '';
    return this._userName + suffix;
  }

  setUserName(name: string) {
    this._userName = name;
  }
}
