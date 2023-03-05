import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigimonPageRoutingModule } from './digimon-page-routing.module';
import { DigimonPageComponent } from './digimon-page.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DigimonPageComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    DigimonPageRoutingModule,
    SharedModule
  ]
})
export class DigimonPageModule { }
