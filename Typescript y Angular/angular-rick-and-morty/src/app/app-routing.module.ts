import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { CharacterDetailPageComponent } from './pages/characters-page/pages/character-detail-page/character-detail-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import { LocationsDetailPageComponent } from './pages/locations-page/pages/locations-detail-page/locations-detail-page.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path: 'characters', component:CharactersPageComponent},
  {path: 'characters/:idCharacter', component:CharacterDetailPageComponent},
  {path: 'contact', component:ContactPageComponent},
  {path: 'locations', component:LocationsPageComponent},
  {path: 'locations/:idLocation', component:LocationsDetailPageComponent},
  {path: 'favorites', component:FavoritesPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
