import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favorites:any = [];

  constructor() { };

  addFavorite(newFavorite: any){
    this.favorites.push(newFavorite);
  }

  getFavorites(){
    return this.favorites;
  }

  removeFavorite(favoriteToRemove: any){
    const indexToRemove = this.favorites.findIndex((favorite:any) => favorite.id === favoriteToRemove.id);

    if(indexToRemove !== -1){
      this.favorites.splice(indexToRemove, 1);
    }
  }
}
