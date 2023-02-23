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
import { NgModelComponent } from './ng-model/ng-model.component';
import { FormsModule } from '@angular/forms';
import { ProMatchComponent } from './pro-match/pro-match.component';
import { ProMatchListComponent } from './pro-match-list/pro-match-list.component';
import { ProMatchFilterComponent } from './pro-match-filter/pro-match-filter.component';
import { ProMatchFormComponent } from './pro-match-form/pro-match-form.component';

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
    NgForComponent,
    NgModelComponent,
    ProMatchComponent,
    ProMatchListComponent,
    ProMatchFilterComponent,
    ProMatchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
