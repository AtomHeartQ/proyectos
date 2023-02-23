import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pro-match-list',
  templateUrl: './pro-match-list.component.html',
  styleUrls: ['./pro-match-list.component.scss']
})
export class ProMatchListComponent implements OnInit {
  @Input()
  matches: MatchInterface[]=[];
  @Output() removeMatchEmitter = new EventEmitter();
  

constructor(){

}
ngOnInit(): void{

}

removeMatch(index:any){
  this.removeMatchEmitter.emit(index);
}
}

interface MatchInterface{
  team1: string;
  team2: string;
  score: string;
}
