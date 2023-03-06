import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterPageModule } from './pages/character-page/character-page.module';

const routes: Routes = [
  {path: '', loadChildren: () => 
    import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {path: 'digimon', loadChildren: () => 
    import('./pages/digimon-page/digimon-page.module').then(m => m.DigimonPageModule)
  },
  {
    path: 'characters', loadChildren: () =>
    import('./pages/character-page/character-page.module').then(m => CharacterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
