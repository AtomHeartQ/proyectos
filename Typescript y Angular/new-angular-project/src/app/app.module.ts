import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { InputButtonComponent } from './input-button/input-button.component';
import { InputHelloWorldComponent } from './input-hello-world/input-hello-world.component';
import { InputCardComponent } from './input-card/input-card.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { OverAgeComponent } from './over-age/over-age.component';
import { NgForComponent } from './ng-for/ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ButtonComponent,
    CardComponent,
    InputButtonComponent,
    InputHelloWorldComponent,
    InputCardComponent,
    NgIfComponent,
    OverAgeComponent,
    NgForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
