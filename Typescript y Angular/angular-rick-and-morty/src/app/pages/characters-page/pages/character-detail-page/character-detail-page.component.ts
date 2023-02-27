import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-character-detail-page',
  templateUrl: './character-detail-page.component.html',
  styleUrls: ['./character-detail-page.component.scss']
})
export class CharacterDetailPageComponent implements OnInit{
  
  character: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      const idCharacter = params.get('idCharacter');
      this.charactersService.getCharacter(idCharacter).subscribe((character: any) => {
        this.character = character;
      }
      )
    })
  }

  constructor(private route: ActivatedRoute, private charactersService: CharactersService){

  }

}
