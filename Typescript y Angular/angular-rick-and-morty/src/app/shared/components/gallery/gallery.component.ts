import { Component, Input, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/local/favorites.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{
  @Input() list: any;
  @Input() flagShowFavoriteButton: boolean = true;
  

  constructor(private favoritesService: FavoritesService){

  }

  ngOnInit(): void {
    
  }

  addOrRemoveToFavorites($event: any, newFavorite:any){
    $event.stopPropagation(); //evita que el click en el botón se propague hacia arriba
    if(this.flagShowFavoriteButton){
      this.favoritesService.addFavorite(newFavorite);
    }else{
      this.favoritesService.removeFavorite(newFavorite);
    }
    
  }
}
