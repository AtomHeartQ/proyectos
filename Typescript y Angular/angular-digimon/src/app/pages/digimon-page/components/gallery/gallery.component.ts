import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DigimonService } from 'src/app/shared/services/digimon.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{
  @Input() list: any;
  @Output() fatherClickedXEmitter = new EventEmitter();

  constructor (){

  }
  
  ngOnInit(): void {
    
  }

}
