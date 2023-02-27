import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() paginationInfo: any;
  @Output() newPageEmittter  = new EventEmitter();

  constructor(){

  }

  ngOnInit(): void {
    
  }
  
  newPageEmit(page: any){
    this.newPageEmittter.emit(page)
  }
}
