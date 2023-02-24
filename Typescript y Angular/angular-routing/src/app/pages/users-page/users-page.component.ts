import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  userList = [
    {
      id:1, name:'Jose', role: 'professor', from: 'Portugal'
    },
    {
      id:2, name:'Pedro', role: 'student', from: 'Japón'
    },
    {
      id:3, name:'Laura', role:'student', from:'Jamaica'
    }
  ];
}
