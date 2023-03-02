import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/shared/services/local/favorites.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {

  favoritesLocal: any;
  
  constructor(private favoritesService: FavoritesService){

  }
  
  ngOnInit(): void {
    this.favoritesLocal=this.favoritesService.getFavorites();
  }

}
