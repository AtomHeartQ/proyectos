import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DigimonService } from 'src/app/shared/services/digimon.service';

@Component({
  selector: 'app-detail-digimon-page',
  templateUrl: './detail-digimon-page.component.html',
  styleUrls: ['./detail-digimon-page.component.scss']
})
export class DetailDigimonPageComponent implements OnInit{

  digimon: any;

  constructor(private route: ActivatedRoute, private digimonService: DigimonService ){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const nameDigimon = params.get('nameDigimon');
      this.digimonService.getDigimon(nameDigimon).subscribe(digimon => {
        this.digimon = digimon;
      });
    })
  }

}
