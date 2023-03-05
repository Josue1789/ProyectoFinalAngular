import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pantallas/home/home.component';
import { AboutMeComponent } from './Pantallas/about-me/about-me.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { CardComponent } from './Componentes/card/card.component';

import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
