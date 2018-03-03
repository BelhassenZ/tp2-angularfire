import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../Entity/user';

@Injectable()
export class DataService {

  private userSource = new BehaviorSubject<User>(new User());
  currentUser = this.userSource.asObservable();

  constructor() { }

  changeUser(user: User) {
    this.userSource.next(user);
  }

}