import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './home/home.component';
import { OptionsComponent } from './options/options.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomButtonComponent } from './perso-components/custom-button/custom-button.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CarouselModule } from 'primeng/carousel';
import { CardsComponent } from './cards/cards.component';
import { CardModule } from 'primeng/card';

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
    ButtonModule,
    AppRoutingModule,
    CarouselModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
