import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  constructor(private http: HttpClient) { }

  getDigimons(){
    return this.http.get('http://localhost:3000/digimon');
  }
}
