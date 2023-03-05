import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigimonPageComponent } from './digimon-page.component';

const routes: Routes = [
  {path: '', component: DigimonPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigimonPageRoutingModule { }
