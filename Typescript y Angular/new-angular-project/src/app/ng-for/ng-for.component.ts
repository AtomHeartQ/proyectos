import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(){

  }

  fruits = ['Fresa', 'Manzana', 'Pera', 'Mango'];
}
