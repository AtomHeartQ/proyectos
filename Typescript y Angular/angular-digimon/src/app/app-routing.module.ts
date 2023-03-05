import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => 
    import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {path: 'digimon', loadChildren: () => 
    import('./pages/digimon-page/digimon-page.module').then(m => m.DigimonPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
