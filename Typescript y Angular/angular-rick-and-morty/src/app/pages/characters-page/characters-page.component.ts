import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {
  characters: any;
  paginationInfo: any = {};

  constructor(private charactersService: CharactersService ){

  }

  ngOnInit(): void {
    this.getCharacters(1);
  }

  getCharacters(page: any){
    this.charactersService.getCharacters(page).subscribe((res: any) => {
      console.log(res);
      this.characters = res.results;
      this.paginationInfo = {...res.info, page: page}
    })
  }
  

}
