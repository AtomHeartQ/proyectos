import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  text: string = 'El ngmodel funciona';
  constructor(){

  } 
};
