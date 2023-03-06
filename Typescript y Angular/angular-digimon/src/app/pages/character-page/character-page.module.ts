import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterPageRoutingModule } from './character-page-routing.module';
import { CharacterPageComponent } from './character-page.component';
import { CharactersGalleyComponent } from './components/characters-galley/characters-galley.component';
import { CharactersCardComponent } from './components/characters-card/characters-card.component';


@NgModule({
  declarations: [
    CharacterPageComponent,
    CharactersGalleyComponent,
    CharactersCardComponent
  ],
  imports: [
    CommonModule,
    CharacterPageRoutingModule
  ]
})
export class CharacterPageModule { }
