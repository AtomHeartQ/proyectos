import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.scss']
})
export class CharactersCardComponent implements OnInit {
  @Input() character: any;

  constructor(private characterService: CharacterService){

  }

  ngOnInit(): void {
  
  } 

  removeCharacter(name: any){
    this.characterService.deleteCharacter(name).subscribe(() =>{
      this.characterService.getCharacters().subscribe();
    });
  }
  
}

