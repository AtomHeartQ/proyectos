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

  getDigimon(name: any){
    return this.http.get('http://localhost:3000/digimon/' + name)
  }

  deleteDigimon(name: any){
    return this.http.delete('http://localhost:3000/digimons/' + name)
  }

  postDigimon(newDigimon: any){
    return this.http.post('http://localhost:3000/digimons', newDigimon)
  }
}
