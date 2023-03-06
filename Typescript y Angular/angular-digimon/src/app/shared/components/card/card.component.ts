import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {levelEnum} from '../../consts/digimon-levels.const';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  @Input() data: any;
  @Output() clickedXEmitter = new EventEmitter();

  levelEnum: any = levelEnum;
  
  ngOnInit(): void {
    
  }

  clickedXEmit($event: any, name: any){
    $event.stopPropagation();
    this.clickedXEmitter.emit(name);
  }

}
