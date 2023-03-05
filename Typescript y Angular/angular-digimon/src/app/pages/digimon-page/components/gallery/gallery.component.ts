import { Component, Input, OnInit } from '@angular/core';
import { DigimonService } from 'src/app/shared/services/digimon.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{
  @Input() list: any;

  constructor (private digimonService: DigimonService){

  }
  
  ngOnInit(): void {
    
  }

}
