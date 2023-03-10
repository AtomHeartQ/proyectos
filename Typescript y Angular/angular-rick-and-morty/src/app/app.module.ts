import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { CharacterDetailPageComponent } from './pages/characters-page/pages/character-detail-page/character-detail-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { LocationsDetailPageComponent } from './pages/locations-page/pages/locations-detail-page/locations-detail-page.component';
import { PriorityNamePipe } from './shared/pipes/priority-name.pipe';
import { MultiplyPipe } from './shared/pipes/multiply.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuComponent,
    CharactersPageComponent,
    GalleryComponent,
    PaginationComponent,
    CharacterDetailPageComponent,
    ContactPageComponent,
    LocationsPageComponent,
    FavoritesPageComponent,
    LocationsDetailPageComponent,
    PriorityNamePipe,
    MultiplyPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
