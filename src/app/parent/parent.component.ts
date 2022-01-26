import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  userArry?: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  fetchUsers(): void {
    this.userService.getUsers().subscribe(users => this.userArry = users);
  }

  clear(): void {
    this.userArry = [];
  }
}
