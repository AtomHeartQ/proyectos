import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { FormComponent } from './pages/contact-page/components/form/form.component';
import { UserDetailPageComponent } from './pages/users-page/pages/user-detail-page/user-detail-page.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { HeadingComponent } from './shared/components/heading/heading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UsersPageComponent,
    ContactPageComponent,
    FormComponent,
    UserDetailPageComponent,
    ButtonComponent,
    HeadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
