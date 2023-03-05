import { Component, OnInit } from '@angular/core';
import { DigimonService } from 'src/app/shared/services/digimon.service';

@Component({
  selector: 'app-digimon-page',
  templateUrl: './digimon-page.component.html',
  styleUrls: ['./digimon-page.component.scss']
})
export class DigimonPageComponent implements OnInit {
  digimons: any;

  constructor (private digimonService: DigimonService){

  }

  ngOnInit(): void {
    this.digimonService.getDigimons().subscribe((digimons: any) => {
      this.digimons = digimons; 
    })
  }

  getCharacters(){
    
  }

}
