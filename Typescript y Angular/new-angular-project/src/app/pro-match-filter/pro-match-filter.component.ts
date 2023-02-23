import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pro-match-filter',
  templateUrl: './pro-match-filter.component.html',
  styleUrls: ['./pro-match-filter.component.scss']
})
export class ProMatchFilterComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 filter: string="";

 @Output() filterEmitter = new EventEmitter();

 filterEmit(){
  this.filterEmitter.emit(this.filter);
 }

}
