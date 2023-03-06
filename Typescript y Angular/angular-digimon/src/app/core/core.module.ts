import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    MenuComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([])
  ],
  exports: [MenuComponent, LoaderComponent]
})
export class CoreModule { }
