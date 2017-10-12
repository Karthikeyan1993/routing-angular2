import { Component, OnInit } from '@angular/core';
import { IUser } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users: IUser[] = [];
  constructor() {
    this.users.push({ userId: 1, displayName: 'karukar' });
    this.users.push({ userId: 2, displayName: 'kamakan' });
  }

  ngOnInit() {
  }
  private testFunc(): void {
    console.log(JSON.stringify(this.users));
  }

}
