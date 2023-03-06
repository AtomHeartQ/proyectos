import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/components/loader/services/loader.service';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent implements OnInit {

  characters: any;
  charactersSubscription: any;
  constructor (private characterService: CharacterService, private loaderService: LoaderService){

  }

  ngOnInit(): void {
    this.charactersSubscription = this.characterService.observableCharacters().subscribe((characters: any) => {
      this.characters = characters;
    })
    this.getCharacters();
  }

  getCharacters(){
    this.loaderService.nextIsLoading(true);
    this.characterService.getCharacters().subscribe((characters: any) => {
      this.loaderService.nextIsLoading(false);
      this.characters = characters;
    })
  }

  ngOnDestroy(){
    this.charactersSubscription.unsubscribe();
  }

}
