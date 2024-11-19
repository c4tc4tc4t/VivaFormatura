import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { OptionsComponent } from './options/options.component';
import { CustomButtonComponent } from './perso-components/custom-button/custom-button.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CarouselModule } from 'primeng/carousel';
import { CardsComponent } from './cards/cards.component';
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OptionsComponent,
    CustomButtonComponent,
    GaleriaComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule,
    CarouselModule,
    CardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
