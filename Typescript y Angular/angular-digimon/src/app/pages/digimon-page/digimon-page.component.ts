import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/components/loader/services/loader.service';
import { DigimonService } from 'src/app/shared/services/digimon.service';

@Component({
  selector: 'app-digimon-page',
  templateUrl: './digimon-page.component.html',
  styleUrls: ['./digimon-page.component.scss']
})
export class DigimonPageComponent implements OnInit {
  digimons: any;

  constructor (private digimonService: DigimonService, private loaderService: LoaderService){

  }

  ngOnInit(): void {
    this.getDigimons();
  }

  getDigimons(){
    this.loaderService.nextIsLoading(true );
    this.digimonService.getDigimons().subscribe((digimons: any) => {
      this.loaderService.nextIsLoading(false);
      this.digimons = digimons; 
    })
  }

  removeDigimon(name: any){
    this.digimonService.deleteDigimon(name).subscribe(() => {
      this.removeLocalDigimon(name);
    })
  }

  removeLocalDigimon(name: any){
    this.digimons = this.digimons.filter((digimon: any) => digimon.name !==name)
  }

}
