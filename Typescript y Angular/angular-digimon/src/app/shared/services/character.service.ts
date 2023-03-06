import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  charactersSubject = new ReplaySubject(1);

  constructor(private http: HttpClient) { };

  nextCharacters(characters: any){
    this.charactersSubject.next(characters);
  }

  observableCharacters(){
    return this.charactersSubject
  }

  getCharacters() {
    return this.http.get('http://localhost:3000/characters')
  }

  deleteCharacter(name: any) {
    return this.http.delete('http://localhost:3000/characters/' + name)
  }
}
