import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pro-match-form',
  templateUrl: './pro-match-form.component.html',
  styleUrls: ['./pro-match-form.component.scss']
})
export class ProMatchFormComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
newMatch = {team1: '', team2: '', score:''};
@Output() addMatchEmitter = new EventEmitter();

constructor(){};
addMatchEmit(){
  this.addMatchEmitter.emit(this.newMatch);
  this.newMatch={team1: '', team2: '', score:''};
}
}
