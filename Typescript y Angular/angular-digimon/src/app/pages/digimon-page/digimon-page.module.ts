import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigimonPageRoutingModule } from './digimon-page-routing.module';
import { DigimonPageComponent } from './digimon-page.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddDigimonComponent } from './pages/add-digimon/add-digimon.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DetailDigimonPageComponent } from './pages/detail-digimon-page/detail-digimon-page.component';


@NgModule({
  declarations: [
    DigimonPageComponent,
    GalleryComponent,
    AddDigimonComponent,
    DetailDigimonPageComponent
  ],
  imports: [
    CommonModule,
    DigimonPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DigimonPageModule { }
