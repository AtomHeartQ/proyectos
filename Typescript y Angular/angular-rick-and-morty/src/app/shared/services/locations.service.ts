import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) { }

  getLocation(idLocation: any){
    return this.http.get('https://rickandmortyapi.com/api/location/' + idLocation)
  }

  getLocations(page = 1){
    return this.http.get('https://rickandmortyapi.com/api/location?page='+ page)
  }
}
