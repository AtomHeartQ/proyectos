import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigimonPageComponent } from './digimon-page.component';
import { AddDigimonComponent } from './pages/add-digimon/add-digimon.component';
import { DetailDigimonPageComponent } from './pages/detail-digimon-page/detail-digimon-page.component';

const routes: Routes = [
  {path: '', component: DigimonPageComponent},
  {path: 'add', component: AddDigimonComponent},
  {path: ':nameDigimon', component: DetailDigimonPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigimonPageRoutingModule { }
